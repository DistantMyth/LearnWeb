import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';

function launch(port) {
  const child = spawn(process.execPath, ['server.js', '--no-open'], { cwd: new URL('..', import.meta.url), env: { ...process.env, PORT: String(port) }, stdio: ['ignore', 'pipe', 'pipe'] });
  let output = '';
  const listeners = [];
  for (const stream of [child.stdout, child.stderr]) stream.on('data', chunk => { output += chunk; listeners.forEach(listener => listener(output)); });
  const exited = new Promise((resolve, reject) => { child.once('exit', code => resolve(code)); child.once('error', reject); });
  const ready = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error(`Launcher did not become ready: ${output}`)), 5000);
    listeners.push(text => { if (text.includes('classroom is ready')) { clearTimeout(timeout); resolve(text); } });
    child.once('exit', code => { clearTimeout(timeout); if (code !== 0) reject(new Error(output)); });
  });
  ready.catch(() => {});
  return { child, ready, exited, output: () => output };
}

async function availablePort() {
  const server = createServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  await new Promise(resolve => server.close(resolve));
  return port;
}

test('the actual command starts a usable classroom on loopback', async () => {
  const port = await availablePort();
  const app = launch(port);
  try {
    assert.match(await app.ready, new RegExp(`127.0.0.1:${port}`));
    assert.equal((await fetch(`http://127.0.0.1:${port}/`)).status, 200);
  } finally { app.child.kill(); await app.exited; }
});

test('an invalid port fails clearly instead of starting on an unexpected address', async () => {
  const app = launch('not-a-port');
  assert.equal(await app.exited, 1);
  assert.match(app.output(), /PORT must be a number/);
});

test('a busy classroom port explains how to recover', async () => {
  const occupied = createServer();
  await new Promise(resolve => occupied.listen(0, '127.0.0.1', resolve));
  try {
    const app = launch(occupied.address().port);
    assert.equal(await app.exited, 1);
    assert.match(app.output(), /already in use.*Close the other classroom terminal/);
  } finally { await new Promise(resolve => occupied.close(resolve)); }
});
