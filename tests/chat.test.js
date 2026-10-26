import test from 'node:test';
import assert from 'node:assert/strict';
import { createChatServer } from '../public/chat-final/server.mjs';

async function withChat(run) {
  const server = createChatServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  try { await run(base); }
  finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
}
async function connect(base) {
  const controller = new AbortController();
  const response = await fetch(`${base}/events`, { signal: controller.signal });
  assert.match(response.headers.get('content-type'), /text\/event-stream/);
  const reader = response.body.getReader();
  let buffer = '';
  return {
    close: () => controller.abort(),
    async next() {
      while (!buffer.includes('\n\n')) {
        const { value, done } = await reader.read();
        assert.equal(done, false);
        buffer += new TextDecoder().decode(value);
      }
      const boundary = buffer.indexOf('\n\n');
      const frame = buffer.slice(0, boundary);
      buffer = buffer.slice(boundary + 2);
      return JSON.parse(frame.slice(6));
    },
  };
}
const post = (base, data, headers = { 'Content-Type': 'application/json' }) => fetch(`${base}/messages`, { method: 'POST', headers, body: typeof data === 'string' ? data : JSON.stringify(data) });

test('two independent streams receive live messages and reconnect receives history', { timeout: 10000 }, () => withChat(async base => {
  const first = await connect(base);
  const second = await connect(base);
  try {
    assert.deepEqual(await first.next(), { type: 'history', messages: [] });
    await second.next();
    const text = '<img src=x onerror=alert(1)>';
    assert.equal((await post(base, { name: 'Ada', text })).status, 201);
    const [a, b] = await Promise.all([first.next(), second.next()]);
    assert.deepEqual(a, b);
    assert.equal(a.message.text, text);
    assert.equal(a.type, 'message');
    const reconnected = await connect(base);
    try { assert.deepEqual((await reconnected.next()).messages, [a.message]); }
    finally { reconnected.close(); }
  } finally { first.close(); second.close(); }
}));

test('invalid messages, oversized bodies and foreign origins cannot enter the room', () => withChat(async base => {
  for (const data of ['{', {}, { name: 'A', text: ' ' }, { name: 'A', text: 'x'.repeat(501) }, { name: 2, text: 'hi' }, { name: 'x'.repeat(31), text: 'hi' }]) {
    assert.equal((await post(base, data)).status, 400);
  }
  assert.equal((await post(base, 'x'.repeat(4097))).status, 413);
  assert.equal((await post(base, {}, { 'Content-Type': 'text/plain' })).status, 415);
  assert.equal((await post(base, { name: 'A', text: 'hi' }, { 'Content-Type': 'application/json', Origin: 'https://other.example' })).status, 403);
  const stream = await connect(base);
  try { assert.deepEqual((await stream.next()).messages, []); }
  finally { stream.close(); }
}));

test('history stays bounded and only intended assets are exposed', () => withChat(async base => {
  for (let index = 0; index < 102; index++) assert.equal((await post(base, { name: 'A', text: String(index) })).status, 201);
  const stream = await connect(base);
  try {
    const history = (await stream.next()).messages;
    assert.equal(history.length, 100);
    assert.equal(history[0].text, '2');
  } finally { stream.close(); }
  assert.equal((await fetch(`${base}/server.mjs`)).status, 404);
  assert.equal((await fetch(`${base}/styles.css`)).status, 200);
  assert.equal((await fetch(base, { method: 'HEAD' })).status, 200);
}));

test('UTF-8 message text survives a character split across request chunks', () => withChat(async base => {
  const { request } = await import('node:http');
  const body = Buffer.from(JSON.stringify({ name: 'अ', text: 'नमस्ते 👋' }));
  const split = body.indexOf(Buffer.from('न')) + 1;
  const response = await new Promise((resolve, reject) => {
    const req = request(`${base}/messages`, { method: 'POST', headers: { 'Content-Type': 'application/json' } }, res => {
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, data: JSON.parse(data) }));
    });
    req.on('error', reject);
    req.write(body.subarray(0, split));
    setTimeout(() => req.end(body.subarray(split)), 10);
  });
  assert.equal(response.status, 201);
  assert.equal(response.data.text, 'नमस्ते 👋');
}));
