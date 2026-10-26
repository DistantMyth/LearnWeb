import test from 'node:test';
import assert from 'node:assert/strict';
import { createState, restoreState, markBuilt, completeLesson, applyPatch, STARTER } from '../public/state.js';

const lessons = [{ id: 'inspect' }, { id: 'editor' }];

test('a lesson cannot complete before the project task and correct knowledge check', () => {
  const initial = createState(lessons);
  assert.throws(() => completeLesson(initial, 'inspect', true), /project task/i);
  const built = markBuilt(initial, 'inspect');
  assert.throws(() => completeLesson(built, 'inspect', false), /answer/i);
  assert.deepEqual(completeLesson(built, 'inspect', true).completed, ['inspect']);
  assert.deepEqual(initial.built, []);
});

test('revisiting a completed lesson does not inflate progress', () => {
  const built = markBuilt(createState(lessons), 'inspect');
  const complete = completeLesson(built, 'inspect', true);
  assert.deepEqual(completeLesson(complete, 'inspect', true).completed, ['inspect']);
  assert.deepEqual(markBuilt(built, 'inspect').built, ['inspect']);
});

test('restoring progress excludes unknown lessons and invalid phase values', () => {
  const restored = restoreState(JSON.stringify({ version: 1, currentLesson: 'deleted', phase: 9, completed: ['inspect', 'bad', 'inspect'], built: ['editor'], draft: '<h1>My club</h1>', applied: ['inspect'] }), lessons);
  assert.equal(restored.currentLesson, 'inspect');
  assert.equal(restored.phase, 0);
  assert.deepEqual(restored.completed, ['inspect']);
  assert.equal(restored.draft, '<h1>My club</h1>');
});

test('corrupted or incompatible saved data is reported instead of silently accepted', () => {
  assert.throws(() => restoreState('{broken', lessons));
  assert.throws(() => restoreState(JSON.stringify({ version: 50 }), lessons), /version/i);
  assert.throws(() => restoreState('null', lessons), /saved/i);
  assert.throws(() => restoreState(JSON.stringify({version: 1, draft: 'x'.repeat(200001)}), lessons), /large/i);
  assert.deepEqual(restoreState(null, lessons), createState(lessons));
});

test('a project addition preserves existing work and is idempotent', () => {
  const initial = { ...createState(lessons), draft: STARTER.replace('<!-- Chat content -->', '<h1>My own club</h1>') };
  const lesson = { id: 'inspect', patch: { target: 'body', html: '<p>Our mission</p>' } };
  const updated = applyPatch(initial, lesson);
  assert.match(updated.draft, /My own club/);
  assert.match(updated.draft, /<p>Our mission<\/p>\n<\/body>/);
  assert.equal(applyPatch(updated, lesson).draft, updated.draft);
  assert.deepEqual(initial.applied, []);
});

test('head additions go inside head, and broken document boundaries are actionable', () => {
  const lesson = { id: 'title', patch: { target: 'head', html: '<meta name="description" content="Our club">' } };
  assert.match(applyPatch(createState(lessons), lesson).draft, /Our club">\n<\/head>/);
  assert.throws(() => applyPatch({ ...createState(lessons), draft: '<h1>No document</h1>' }, lesson), /closing <\/head>/);
  assert.deepEqual(applyPatch(createState(lessons), { id: 'no-patch' }), createState(lessons));
});

test('snippet insertion ignores closing-tag text in comments, attributes, and raw text', () => {
  const draft = '<!DOCTYPE html><html><head><title>Club</title></head><body><!-- Old </body> layout --><div title="</body>">Keep me</div><script>const example = "</body>";</script></body></html>';
  const lesson = { id: 'inspect', patch: { target: 'body', html: '<p>Visible addition</p>' } };
  const updated = applyPatch({ ...createState(lessons), draft }, lesson);
  assert.match(updated.draft, /<\/script><p>Visible addition<\/p>\n<\/body>/);
  assert.match(updated.draft, /<!-- Old <\/body> layout -->/);
});

test('the page-title lesson replaces the existing title without losing other head content', () => {
  const initial = { ...createState(lessons), draft: STARTER.replace('</head>', '<meta name="author" content="Students"></head>') };
  const lesson = { id: 'title', patch: { target: 'head', html: '<title>Our new clubhouse</title>\n<link rel="icon" href="club.svg">' } };
  const updated = applyPatch(initial, lesson);
  assert.equal([...updated.draft.matchAll(/<title>/g)].length, 1);
  assert.match(updated.draft, /<title>Our new clubhouse<\/title>/);
  assert.match(updated.draft, /name="author" content="Students"/);
});

test('new form controls join the same existing form and keep previous inputs', () => {
  const draft = STARTER.replace('<!-- Chat content -->', '<form data-id="club-form" id="other"><p>Other form</p></form><form id="club-form"><input name="member"></form>');
  const lesson = { id: 'more-controls', patch: { target: 'form', formId: 'club-form', html: '<label>Interests <input name="interests"></label>' } };
  const updated = applyPatch({ ...createState(lessons), draft }, lesson);
  assert.match(updated.draft, /<form data-id="club-form" id="other"><p>Other form<\/p><\/form>/);
  assert.match(updated.draft, /<input name="member"><label>Interests <input name="interests"><\/label>\n<\/form>/);
  assert.throws(() => applyPatch(createState(lessons), lesson), /initial form/i);
});

test('changing the page title preserves accessible SVG titles in the body', () => {
  const initial = { ...createState(lessons), draft: STARTER.replace('<!-- Chat content -->', '<svg><title>Club badge</title><circle r="5"></circle></svg>') };
  const lesson = { id: 'new-title', patch: { target: 'head', html: '<title>New browser tab title</title>' } };
  const updated = applyPatch(initial, lesson);
  assert.match(updated.draft, /<svg><title>Club badge<\/title>/);
  assert.match(updated.draft, /<title>New browser tab title<\/title>/);
});
