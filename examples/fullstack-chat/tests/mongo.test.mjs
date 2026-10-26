import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { MongoClient } from 'mongodb';
import { connectStore } from '../store.mjs';

test('real MongoDB persists history across store restart, validates documents and bounds reads', { skip: !process.env.MONGO_TEST_URI, timeout: 20000 }, async () => {
  const name = `campus_chat_test_${randomUUID().replaceAll('-', '')}`;
  const uri = process.env.MONGO_TEST_URI;
  const cleanup = new MongoClient(uri);
  let store;
  try {
    store = await connectStore(uri, name);
    const saved = await store.insert({ name: 'Ada', text: 'Persisted नमस्ते' });
    assert.ok(saved.id); assert.ok(saved.createdAt.endsWith('Z'));
    await store.close(); store = undefined;
    store = await connectStore(uri, name);
    assert.deepEqual(await store.listRecent(), [saved]);
    await cleanup.connect();
    const collection = cleanup.db(name).collection('messages');
    await assert.rejects(collection.insertOne({ roomId: 'general', name: 'A', text: 'Missing date' }), /validation/i);
    for (let index = 0; index < 102; index++) await store.insert({ name: 'A', text: String(index) });
    const recent = await store.listRecent();
    assert.equal(recent.length, 100);
    assert.ok(!recent.some(row => row.id === saved.id));
    assert.ok((await collection.indexes()).some(index => index.key.roomId === 1 && index.key.createdAt === -1));
  } finally {
    if (store) await store.close();
    if (name.startsWith('campus_chat_test_')) await cleanup.db(name).dropDatabase();
    await cleanup.close();
  }
});
