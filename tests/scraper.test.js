import test from 'node:test';
import assert from 'node:assert/strict';
import { sidebarTopics, chapterMetadata } from '../scripts/scrape-curriculum.mjs';
test('source parser isolates sidebar topics, deduplicates and preserves exact chapter paths', () => {
  const html = `<a href="/bad.asp">outside</a><div id='leftmenuinnerinner'><a href="react_intro.asp">React <b>Intro</b></a><a href="react_intro.asp">duplicate</a><a href="https://foreign.example/page.asp">foreign</a><a href="/default.asp">home</a><script>outside</script><a href="bad.asp">outside</a>`;
  assert.deepEqual(sidebarTopics(html, 'react'), [{ path: '/react/react_intro.asp', title: 'React Intro', track: 'react' }]);
  assert.throws(() => sidebarTopics('<html></html>', 'node'), /No tutorial sidebar/);
});
test('chapter metadata handles duplicate responsive main containers and ignores script/comment markup', () => {
  const html = `<title>MongoDB Find</title><h1>Menu</h1><div id='main'><div id="main"><!-- <h2>fake</h2> --><script>const h = '<h2>bad</h2>'</script><h1>Find</h1><h2>Projection &amp; fields</h2>`;
  assert.deepEqual(chapterMetadata(html), { pageTitle: 'MongoDB Find', headings: ['Find', 'Projection & fields'] });
});
