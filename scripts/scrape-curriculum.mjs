// Refresh topic/heading metadata. Lesson explanations are independently authored.
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { writeFile, mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
const run = promisify(execFile);
const decode = text => text.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
export function sidebarTopics(html, track) {
  const sidebar = html.split(/id=['"]leftmenuinnerinner['"]/)[1]?.split('<script>')[0];
  if (!sidebar) throw new Error(`No tutorial sidebar for ${track}`);
  const topics = new Map();
  for (const match of sidebar.matchAll(/<a\b[^>]*href=['"]([^'"]+)['"][^>]*>([\s\S]*?)<\/a>/g)) {
    const url = new URL(match[1], `https://www.w3schools.com/${track === 'node' ? 'nodejs' : track}/`);
    if (url.hostname !== 'www.w3schools.com' || url.pathname === '/default.asp' || !/\.(asp|php)$/.test(url.pathname)) continue;
    const path = url.pathname + url.search;
    if (!topics.has(path)) topics.set(path, { path, title: decode(match[2]), track: track === 'node' && /nodejs_(express|middleware|routing|rest_api)/.test(path) ? 'express' : track });
  }
  return [...topics.values()];
}
export function chapterMetadata(html) {
  // Keep short structural metadata, never source lesson bodies or code.
  const boundary = html.search(/<div\b[^>]*\bid=['"]main['"]/i);
  const main = (boundary >= 0 ? html.slice(boundary) : html).replace(/<!--[\s\S]*?-->/g, "").replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, "");
  return { pageTitle: decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || ''), headings: [...main.matchAll(/<h[12]\b[^>]*>([\s\S]*?)<\/h[12]>/gi)].slice(0, 18).map(match => decode(match[1]).slice(0, 160)) };
}
async function download(url) {
  const { stdout } = await run('curl', ['--fail', '--location', '--retry', '2', '--max-time', '40', '--silent', '--show-error', '--user-agent', 'Mozilla/5.0 LearnWeb curriculum audit', url], { maxBuffer: 6 * 1024 * 1024 });
  if (!/<html[\s>]/i.test(stdout)) throw new Error('Response was not HTML');
  return stdout;
}
export const expressPaths = [
  '/en/starter/installing/', '/en/starter/hello-world/', '/en/starter/generator/', '/en/starter/basic-routing/', '/en/starter/static-files/', '/en/starter/faq/',
  '/en/guide/routing/', '/en/guide/writing-middleware/', '/en/guide/using-middleware/', '/en/guide/using-template-engines/', '/en/guide/error-handling/', '/en/guide/debugging/', '/en/guide/behind-proxies/', '/en/guide/migrating-5/', '/en/guide/database-integration/',
  '/en/advanced/developing-template-engines/', '/en/advanced/pm/', '/en/advanced/security-updates/', '/en/advanced/best-practice-security/', '/en/advanced/best-practice-performance/', '/en/advanced/healthcheck-graceful-shutdown/', '/en/resources/middleware/', '/en/5x/api/'
];
async function main() {
  const topics = [];
  await mkdir('/tmp/learnweb-fullstack-sources', { recursive: true });
  for (const [track, folder] of [['react', 'react'], ['node', 'nodejs'], ['mongodb', 'mongodb']]) {
    const html = await download(`https://www.w3schools.com/${folder}/`);
    await writeFile(`/tmp/learnweb-fullstack-sources/${track}-sidebar.html`, html);
    topics.push(...sidebarTopics(html, track));
  }
  topics.push(...expressPaths.map(path => ({ path: `https://expressjs.com${path}`, title: `Express: ${path.split('/').filter(Boolean).at(-1)}`, track: 'express' })));
  let cursor = 0;
  const unique = new Map();
  for (const topic of topics) unique.set(new URL(topic.path, 'https://www.w3schools.com').href.split('?')[0], null);
  const urls = [...unique.keys()];
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (cursor < urls.length) {
      const url = urls[cursor++];
      try {
        const html = await download(url);
        // Temporary raw material permits author review without republishing it.
        await writeFile(`/tmp/learnweb-fullstack-sources/${encodeURIComponent(url)}.html`, html);
        unique.set(url, { status: 'retrieved', ...chapterMetadata(html) });
      } catch (error) { unique.set(url, { status: 'unavailable', reason: error.message.split('\n')[0] }); }
    }
  }));
  const snapshot = topics.map(topic => ({ ...topic, fetchedAt: new Date().toISOString().slice(0, 10), ...unique.get(new URL(topic.path, 'https://www.w3schools.com').href.split('?')[0]) }));
  await writeFile(new URL('../public/content/fullstack-source-topics.json', import.meta.url), JSON.stringify(snapshot, null, 2) + '\n');
  console.log(JSON.stringify({ entries: snapshot.length, unavailable: snapshot.filter(topic => topic.status !== 'retrieved').map(topic => topic.path), tracks: Object.fromEntries(['react', 'node', 'express', 'mongodb'].map(track => [track, snapshot.filter(topic => topic.track === track).length])) }, null, 2));
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await main();
