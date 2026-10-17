import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { createAppServer } from '../server.js';

async function withServer(run) {
  const server = createAppServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try { await run(`http://127.0.0.1:${server.address().port}`); }
  finally { await new Promise(resolve => server.close(resolve)); }
}

test('the course serves HTML and modules without a build or install', () => withServer(async base => {
  const home = await fetch(base);
  assert.equal(home.status, 200);
  assert.match(home.headers.get('content-type'), /text\/html/);
  assert.match(await home.text(), /LearnWeb/);
  const module = await fetch(`${base}/state.js`);
  assert.match(module.headers.get('content-type'), /javascript/);
  assert.equal((await fetch(`${base}/missing.js`)).status, 404);
}));

test('the server never exposes project internals or accepts writes', () => withServer(async base => {
  assert.equal((await fetch(`${base}/package.json`)).status, 404);
  assert.equal((await fetch(`${base}/server.js`)).status, 404);
  assert.equal((await fetch(base, {method:'POST', body:'change'})).status, 405);
  const head = await fetch(base, {method:'HEAD'});
  assert.equal(head.status, 200);
  assert.equal(await head.text(), '');
  assert.equal(head.headers.get('x-content-type-options'), 'nosniff');
}));

test('encoded traversal and malformed paths do not escape the public directory', () => withServer(async base => {
  for (const path of ['/%2e%2e%2fpackage.json', '/%5c..%5cpackage.json', '/%00', '/%zz']) {
    const status = await new Promise((resolve, reject) => {
      http.get(`${base}${path}`, response => { response.resume(); resolve(response.statusCode); }).on('error', reject);
    });
    assert.equal(status, 400);
  }
}));
