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

test('final chat source files download as attachments through the read-only classroom', () => withServer(async base => {
  for (const file of ['index.html', 'styles.css', 'chat.js', 'server.mjs']) {
    const response = await fetch(`${base}/chat-final/${file}?download=1`);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('content-disposition'), `attachment; filename="${file}"`);
    assert.ok((await response.text()).length > 100);
  }
}));

test('full-stack downloads expose only allowlisted source files, never secrets or dependencies', () => withServer(async base => {
  const { fullstackFiles } = await import('../public/content/fullstack-downloads.js');
  for (const file of fullstackFiles) {
    const response = await fetch(`${base}/fullstack-files/${file}`);
    assert.equal(response.status, 200, file);
    assert.equal(response.headers.get('content-disposition'), `attachment; filename="${file.split('/').at(-1)}"`);
    assert.ok((await response.text()).length, file);
  }
  for (const file of ['.env', 'node_modules/express/package.json', 'dist/index.html', 'missing.mjs']) assert.equal((await fetch(`${base}/fullstack-files/${file}`)).status, 404, file);
}));
