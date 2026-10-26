import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { lessons, modules, sourceKey, sourceUrl } from '../public/content/course.js';

const topics = (await Promise.all(['source-topics.json', 'fullstack-source-topics.json'].map(file => readFile(new URL(`../public/content/${file}`, import.meta.url), 'utf8').then(JSON.parse)))).flat();

test('all source-sidebar topics map to an included lesson rather than a deferred placeholder', () => {
  const taught = new Set(lessons.flatMap(lesson => lesson.sources.map(sourceKey)));
  assert.deepEqual(topics.filter(topic => !taught.has(sourceKey(topic.path))), []);
  assert.deepEqual([...new Set(topics.map(topic => topic.track))].sort(), ['css', 'express', 'html', 'js', 'mongodb', 'node', 'react']);
  assert.equal(sourceUrl('/css/css_intro.asp'), 'https://www.w3schools.com/css/css_intro.asp');
  assert.equal(sourceUrl('html_intro.asp'), 'https://www.w3schools.com/html/html_intro.asp');
});

test('every included lesson is navigable with a concrete build and valid concept check', () => {
  const ids = new Set();
  for (const lesson of lessons) {
    assert.ok(!ids.has(lesson.id), `Duplicate lesson: ${lesson.id}`);
    ids.add(lesson.id);
    assert.ok(modules.some(module => module.id === lesson.module), `Unknown module: ${lesson.module}`);
    for (const field of ['title', 'intro', 'example', 'task']) assert.ok(lesson[field]?.length > 10, `${lesson.id}: ${field}`);
    assert.ok(lesson.steps.length >= 3, lesson.id);
    assert.ok(lesson.concepts.length >= 2, lesson.id);
    assert.ok(lesson.check.options[lesson.check.answer], lesson.id);
    assert.ok(lesson.check.explanation, lesson.id);
  }
  for (const module of modules) assert.ok(lessons.some(lesson => lesson.module === module.id), `Empty module: ${module.id}`);
});

test('the learning sequence reaches real-time only after CSS and JavaScript', () => {
  const first = module => lessons.findIndex(lesson => lesson.module === module);
  assert.ok(first('css') > first('media'));
  assert.ok(first('javascript') > first('css'));
  assert.ok(first('realtime') > first('js-apis'));
  assert.equal(lessons.at(-1).id, 'fullstack-review');
  assert.ok(lessons.some(lesson => lesson.sources.some(path => sourceKey(path) === '/html/html5_geolocation.asp')));
  assert.ok(lessons.some(lesson => lesson.sources.some(path => sourceKey(path) === '/html/html5_webworkers.asp')));
});

test('the sequential practice snippets keep a single document and target the existing chat form', async () => {
  const { createState, applyPatch } = await import('../public/state.js');
  let state = createState(lessons);
  for (const lesson of lessons) {
    if (!lesson.patch) continue;
    state = applyPatch(state, lesson);
    assert.equal((state.draft.match(/<!doctype html>/gi) || []).length, 1, lesson.id);
    assert.equal((state.draft.match(/<title>/gi) || []).length, 1, lesson.id);
    assert.ok(!/\bid="[^\"]*\s[^\"]*"/.test(lesson.patch.html), `${lesson.id}: whitespace in an id`);
  }
  assert.match(state.draft, /Campus Chat/);
});


test('stack transitions precede the implementations that depend on them', () => {
  const index = id => lessons.findIndex(lesson => lesson.id === id);
  const first = module => lessons.findIndex(lesson => lesson.module === module);
  for (const [bridge, stage] of [['bridge-vanilla-react','react'],['bridge-react-node','node'],['bridge-node-express','express'],['bridge-express-mongo','mongodb']]) {
    assert.ok(index(bridge) >= 0 && index(bridge) < first(stage), bridge);
  }
  assert.ok(first('express') < index('bridge-react-express'));
  assert.ok(index('bridge-react-express') < first('mongodb'));
  assert.ok(first('mongodb') < first('node-data'));
  assert.ok(first('node-data') < first('fullstack'));
});

test('scrape snapshot preserves retrieval status instead of claiming unavailable pages were fetched', () => {
  const snapshot = topics.filter(topic => ['react','node','express','mongodb'].includes(topic.track));
  assert.ok(snapshot.length > 200);
  for (const topic of snapshot) {
    assert.ok(['retrieved', 'unavailable'].includes(topic.status), topic.path);
    if (topic.status === 'retrieved') assert.ok(topic.pageTitle.length, topic.path);
    else assert.ok(topic.reason, topic.path);
  }
});
