import test from 'node:test';
import assert from 'node:assert/strict';
import { mergeMessage } from '../src/messages.js';
test('out-of-order live messages match persisted history order and ignore duplicate IDs', () => {
  const newer = { id: 'c', createdAt: '2026-10-26T09:00:02.000Z' };
  const older = { id: 'b', createdAt: '2026-10-26T09:00:01.000Z' };
  const tie = { id: 'a', createdAt: older.createdAt };
  let rows = mergeMessage([newer], older);
  rows = mergeMessage(rows, tie);
  assert.deepEqual(rows.map(row => row.id), ['a', 'b', 'c']);
  assert.equal(mergeMessage(rows, newer), rows);
  const many = Array.from({ length: 100 }, (_, index) => ({ id: String(index).padStart(4, '0'), createdAt: older.createdAt }));
  assert.equal(mergeMessage(many, newer).length, 100);
});
