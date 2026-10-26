import { fullstackFiles } from './public/content/fullstack-downloads.js';
import { createServer } from 'node:http';
import { readFile, realpath } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawn } from 'node:child_process';

const publicRoot = await realpath(fileURLToPath(new URL('./public/', import.meta.url)));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.png': 'image/png', '.ico': 'image/x-icon' };

export function createAppServer() {
  return createServer(async (request, response) => {
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('Referrer-Policy', 'no-referrer');
    response.setHeader('Cache-Control', 'no-cache');
    response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; frame-src 'self' about:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'");
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(405, { Allow: 'GET, HEAD' }).end('This classroom is read-only.');
      return;
    }
    let pathname;
    try {
      pathname = decodeURIComponent(request.url.split('?')[0]);
      if (!pathname.startsWith('/') || pathname.includes('..') || /[\\\0]/.test(pathname)) throw new Error('Invalid path');
    } catch {
      response.writeHead(400).end('Invalid request path.');
      return;
    }
    if (pathname.startsWith('/fullstack-files/')) {
      const name = pathname.slice('/fullstack-files/'.length);
      if (!fullstackFiles.includes(name)) { response.writeHead(404).end('Not found.'); return; }
      try {
        const content = await readFile(new URL(`./examples/fullstack-chat/${name}`, import.meta.url));
        response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8', 'Content-Length': content.length, 'Content-Disposition': `attachment; filename="${name.split('/').at(-1)}"` });
        response.end(request.method === 'HEAD' ? undefined : content);
      } catch { response.writeHead(404).end('Reference source unavailable.'); }
      return;
    }
    try {
      const file = await realpath(resolve(publicRoot, `.${pathname === '/' ? '/index.html' : pathname}`));
      if (!file.startsWith(publicRoot.endsWith(sep) ? publicRoot : publicRoot + sep)) {
        response.writeHead(404).end('Not found.');
        return;
      }
      const content = await readFile(file);
      if (pathname.startsWith('/chat-final/') && new URL(request.url, 'http://localhost').searchParams.get('download') === '1') {
        response.setHeader('Content-Disposition', `attachment; filename="${file.split(sep).at(-1)}"`);
      }
      response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Content-Length': content.length });
      response.end(request.method === 'HEAD' ? undefined : content);
    } catch (error) {
      if (!['ENOENT', 'EISDIR', 'ENOTDIR'].includes(error.code)) console.error('Unable to serve classroom file:', error);
      response.writeHead(['ENOENT', 'EISDIR', 'ENOTDIR'].includes(error.code) ? 404 : 500).end('Unable to open this classroom file.');
    }
  });
}

function openBrowser(url) {
  const command = process.platform === 'win32' ? 'rundll32' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  const args = process.platform === 'win32' ? ['url.dll,FileProtocolHandler', url] : [url];
  const child = spawn(command, args, { detached: true, stdio: 'ignore' });
  child.on('error', () => console.info(`Open ${url} in your browser.`));
  child.unref();
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const port = Number(process.env.PORT || 4173);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    console.error('PORT must be a number from 1 to 65535.');
    process.exitCode = 1;
  } else {
    const server = createAppServer();
    server.on('error', error => {
      console.error(error.code === 'EADDRINUSE' ? `Port ${port} is already in use. Close the other classroom terminal and run npm start again.` : `Could not start the classroom: ${error.message}`);
      process.exitCode = 1;
    });
    server.listen(port, '127.0.0.1', () => {
      const url = `http://127.0.0.1:${port}`;
      console.info(`\n  LearnWeb classroom is ready\n  ${url}\n\n  Keep this terminal open. Press Ctrl+C to stop.\n`);
      if (!process.argv.includes('--no-open')) openBrowser(url);
    });
  }
}
