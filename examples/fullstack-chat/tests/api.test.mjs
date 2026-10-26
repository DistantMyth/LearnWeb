import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { createApi } from '../server.mjs';
const memory = () => {
  const rows = [];
  return { listRecent: async () => [...rows], insert: async ({ name, text }) => { const row = { id: String(rows.length + 1), name, text, createdAt: new Date().toISOString() }; rows.push(row); return row; } };
};
async function withApi(store, run) {
  const app = createApi(store);
  const server = createServer(app);
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try { await run(`http://127.0.0.1:${server.address().port}`, app); }
  finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
}
const post = (base, data, headers = { 'Content-Type': 'application/json' }) => fetch(`${base}/api/messages`, { method: 'POST', headers, body: typeof data === 'string' ? data : JSON.stringify(data) });
async function stream(base) {
  const controller = new AbortController();
  const response = await fetch(`${base}/api/events`, { signal: controller.signal });
  assert.equal(response.status, 200);
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  return { close: () => controller.abort(), ended: async () => (await reader.read()).done, async next() {
    while (!buffer.includes('\n\n')) { const chunk = await reader.read(); assert.equal(chunk.done, false); buffer += decoder.decode(chunk.value, { stream: true }); }
    const end = buffer.indexOf('\n\n'); const frame = buffer.slice(0, end); buffer = buffer.slice(end + 2); return JSON.parse(frame.slice(6));
  } };
}
test('Express stores validated messages and broadcasts identical stable IDs to two clients', { timeout: 10000 }, () => withApi(memory(), async base => {
  const a = await stream(base); const b = await stream(base);
  try {
    assert.deepEqual((await a.next()).messages, []); await b.next();
    const response = await post(base, { name: ' Ada ', text: 'नमस्ते <img src=x>' });
    assert.equal(response.status, 201);
    const saved = await response.json();
    assert.equal(saved.name, 'Ada');
    assert.equal(saved.text, 'नमस्ते <img src=x>');
    assert.deepEqual((await a.next()).message, saved);
    assert.deepEqual((await b.next()).message, saved);
    assert.deepEqual(await (await fetch(`${base}/api/messages`)).json(), [saved]);
  } finally { a.close(); b.close(); }
}));
test('API rejects malformed JSON, invalid fields, oversized bodies and foreign origins', () => withApi(memory(), async base => {
  for (const body of ['{', {}, { name: 'A', text: ' ' }, { name: 'A', text: { $ne: '' } }, { name: 'A', text: 'x'.repeat(501) }]) assert.equal((await post(base, body)).status, 400);
  assert.equal((await post(base, 'x'.repeat(5000))).status, 413);
  assert.equal((await post(base, 'hello', { 'Content-Type': 'text/plain' })).status, 415);
  assert.equal((await post(base, { name: 'A', text: 'hello' }, { 'Content-Type': 'application/json', Origin: 'https://foreign.example' })).status, 403);
  assert.deepEqual(await (await fetch(`${base}/api/messages`)).json(), []);
  assert.equal((await fetch(`${base}/store.mjs`)).status, 404);
}));
test('failed storage does not claim success or broadcast a phantom message', () => withApi({ listRecent: async () => [], insert: async () => { throw new Error('internal database details'); } }, async base => {
  const response = await post(base, { name: 'A', text: 'hello' });
  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), { error: 'Storage unavailable. Try again later.' });
}));
test('a message arriving during the initial history query is buffered until after the snapshot', { timeout: 10000 }, async () => {
  let release; let queryStarted;
  const started = new Promise(resolve => { queryStarted = resolve; });
  const snapshot = new Promise(resolve => { release = resolve; });
  const store = { listRecent: async () => { queryStarted(); return snapshot; }, insert: async data => ({ ...data, id: 'during-load', createdAt: new Date().toISOString() }) };
  await withApi(store, async base => {
    const connecting = stream(base);
    await started;
    assert.equal((await post(base, { name: 'A', text: 'during snapshot' })).status, 201);
    release([]);
    const connection = await connecting;
    try { assert.equal((await connection.next()).type, 'history'); assert.equal((await connection.next()).message.id, 'during-load'); }
    finally { connection.close(); }
  });
});


test('graceful shutdown finishes SSE responses so proxies can reconnect cleanly', { timeout: 5000 }, () => withApi(memory(), async (base, app) => {
  const connection = await stream(base);
  try {
    await connection.next();
    app.locals.closeStreams();
    assert.equal(await connection.ended(), true);
  } finally { connection.close(); }
}));


test('shutdown during a pending history read does not write headers to an ended response', { timeout: 5000 }, async () => {
  let release; let queryStarted;
  const started = new Promise(resolve => { queryStarted = resolve; });
  const pending = new Promise(resolve => { release = resolve; });
  const store = { listRecent: async () => { queryStarted(); return pending; }, insert: async () => { throw new Error('unused'); } };
  await withApi(store, async (base, app) => {
    const connecting = fetch(`${base}/api/events`);
    await started;
    app.locals.closeStreams();
    release([]);
    const response = await connecting;
    assert.equal(await response.text(), '');
  });
});
