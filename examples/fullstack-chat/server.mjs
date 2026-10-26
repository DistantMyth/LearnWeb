import express from 'express';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { connectStore } from './store.mjs';

export function createApi(store) {
  const app = express();
  const subscribers = new Set();
  const streams = new Set();
  app.locals.closeStreams = () => {
    subscribers.clear();
    for (const stream of streams) stream.end();
    streams.clear();
  };
  app.disable('x-powered-by');
  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'no-store');
    if (req.method === 'POST' && req.get('origin') && req.get('origin') !== `http://${req.get('host')}`) {
      res.status(403).json({ error: 'Use the chat through its own origin.' }); return;
    }
    next();
  });
  app.use(express.json({ limit: '4kb' }));
  app.get('/api/messages', async (req, res) => res.json(await store.listRecent()));
  app.get('/api/events', async (req, res, next) => {
    let ready = false;
    const queued = [];
    const send = message => {
      if (res.destroyed || res.writableEnded) return;
      if (ready) res.write(`data: ${JSON.stringify({ type: 'message', message })}\n\n`);
      else { queued.push(message); if (queued.length > 100) queued.shift(); }
    };
    subscribers.add(send);
    streams.add(res);
    let heartbeat;
    res.on('close', () => { subscribers.delete(send); streams.delete(res); clearInterval(heartbeat); });
    try {
      const messages = await store.listRecent();
      if (res.destroyed || res.writableEnded) return;
      res.set({ 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
      res.flushHeaders();
      res.write(`data: ${JSON.stringify({ type: 'history', messages })}\n\n`);
      const seen = new Set(messages.map(message => message.id));
      for (const message of queued) if (!seen.has(message.id)) res.write(`data: ${JSON.stringify({ type: 'message', message })}\n\n`);
      ready = true;
      heartbeat = setInterval(() => res.write(': keep-alive\n\n'), 15000);
      heartbeat.unref();
    } catch (error) { subscribers.delete(send); next(error); }
  });
  app.post('/api/messages', async (req, res) => {
    if (!req.is('application/json')) { res.status(415).json({ error: 'Send JSON.' }); return; }
    const { name, text } = req.body || {};
    if (typeof name !== 'string' || typeof text !== 'string' || !name.trim() || !text.trim() || name.length > 30 || text.length > 500) {
      res.status(400).json({ error: 'Name: 1–30 characters; message: 1–500 characters.' }); return;
    }
    const saved = await store.insert({ name: name.trim(), text: text.trim() });
    for (const subscriber of subscribers) subscriber(saved);
    res.status(201).json(saved);
  });
  app.use(express.static(fileURLToPath(new URL('./dist/', import.meta.url)), { index: 'index.html' }));
  app.use((req, res) => res.status(404).json({ error: 'Not found.' }));
  app.use((error, req, res, next) => {
    if (res.headersSent) { next(error); return; }
    const status = error.type === 'entity.too.large' ? 413 : error.type === 'entity.parse.failed' ? 400 : 503;
    res.status(status).json({ error: status === 413 ? 'Message too large.' : status === 400 ? 'Invalid JSON.' : 'Storage unavailable. Try again later.' });
  });
  return app;
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  let store;
  try {
    const port = Number(process.env.PORT || 4181);
    if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT must be from 1 to 65535.');
    store = await connectStore(process.env.MONGODB_URI, process.env.MONGODB_DB || 'campus_chat');
    const app = createApi(store);
    const server = app.listen(port, '127.0.0.1', () => console.log(`Campus Chat API: http://127.0.0.1:${port}`));
    server.on('error', async error => { console.error(error.code || 'Server failed'); await store.close(); process.exitCode = 1; });
    for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => {
      app.locals.closeStreams();
      const timer = setTimeout(() => { server.closeAllConnections(); }, 1500);
      timer.unref();
      server.close(async () => { clearTimeout(timer); await store.close(); });
      server.closeIdleConnections();
    });
  } catch (error) {
    if (store) await store.close();
    console.error('Could not start chat. Check MongoDB, server-only environment settings, and the port.', error.code || '');
    process.exitCode = 1;
  }
}
