// Run with Node.js 22+: node server.mjs, then open http://127.0.0.1:4180.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

export function createChatServer() {
  const listeners = new Set();
  const history = [];
  const files = { '/': ['index.html', 'text/html'], '/chat.js': ['chat.js', 'text/javascript'], '/styles.css': ['styles.css', 'text/css'] };
  const server = createServer(async (request, response) => {
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; base-uri 'none'; frame-ancestors 'none'");
    const path = request.url?.split('?')[0];
    if (request.headers.origin && request.headers.origin !== `http://${request.headers.host}`) {
      response.writeHead(403).end('Use the chat page on this server.');
      return;
    }
    if (path === '/events' && request.method === 'GET') {
      response.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
      response.write(`data: ${JSON.stringify({ type: 'history', messages: history })}\n\n`);
      listeners.add(response);
      const heartbeat = setInterval(() => response.write(': keep-alive\n\n'), 15000);
      response.on('close', () => { clearInterval(heartbeat); listeners.delete(response); });
      return;
    }
    if (path === '/messages' && request.method === 'POST') {
      if (request.headers['content-type']?.split(';')[0] !== 'application/json') {
        response.writeHead(415).end('Send JSON.'); return;
      }
      try {
        request.setEncoding('utf8');
        let body = '';
        for await (const chunk of request) {
          body += chunk;
          if (Buffer.byteLength(body) > 4096) { response.writeHead(413).end('Message too large.'); return; }
        }
        const message = JSON.parse(body);
        if (typeof message.name !== 'string' || typeof message.text !== 'string' || !message.name.trim() || !message.text.trim() || message.name.length > 30 || message.text.length > 500) {
          response.writeHead(400).end('Name: 1–30 characters; message: 1–500 characters.'); return;
        }
        const saved = { name: message.name.trim(), text: message.text.trim(), time: new Date().toISOString() };
        history.push(saved);
        if (history.length > 100) history.shift();
        for (const listener of listeners) listener.write(`data: ${JSON.stringify({ type: 'message', message: saved })}\n\n`);
        response.writeHead(201, { 'Content-Type': 'application/json' }).end(JSON.stringify(saved));
      } catch {
        if (!response.writableEnded) response.writeHead(400).end('Invalid JSON.');
      }
      return;
    }
    const file = Object.hasOwn(files, path) ? files[path] : undefined;
    if (!file) { response.writeHead(404).end('Not found.'); return; }
    if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405, { Allow: 'GET, HEAD' }).end(); return; }
    try {
      const content = await readFile(new URL(file[0], import.meta.url));
      response.writeHead(200, { 'Content-Type': `${file[1]}; charset=utf-8` });
      response.end(request.method === 'HEAD' ? undefined : content);
    } catch { response.writeHead(500).end('Chat files are missing.'); }
  });
  server.on('close', () => { for (const listener of listeners) listener.end(); });
  return server;
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const server = createChatServer();
  server.on('error', error => { console.error(error.message); process.exitCode = 1; });
  server.listen(4180, '127.0.0.1', () => console.log('Campus Chat: http://127.0.0.1:4180 — open two tabs. Ctrl+C stops it.'));
}
