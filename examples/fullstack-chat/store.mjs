import { MongoClient } from 'mongodb';

export async function connectStore(uri, databaseName) {
  if (!uri || !databaseName) throw new Error('Set MONGODB_URI and MONGODB_DB on the server.');
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
  try {
    await client.connect();
    const db = client.db(databaseName);
    // Validate new collections without silently changing an existing schema.
    if (!(await db.listCollections({ name: 'messages' }).toArray()).length) {
      await db.createCollection('messages', {
        validator: { $jsonSchema: {
          bsonType: 'object', required: ['roomId', 'name', 'text', 'createdAt'],
          properties: {
            roomId: { enum: ['general'] },
            name: { bsonType: 'string', minLength: 1, maxLength: 30 },
            text: { bsonType: 'string', minLength: 1, maxLength: 500 },
            createdAt: { bsonType: 'date' },
          },
        } },
      });
    }
    const collection = db.collection('messages');
    await collection.createIndex({ roomId: 1, createdAt: -1, _id: -1 });
    const toWire = row => ({ id: row._id.toHexString(), name: row.name, text: row.text, createdAt: row.createdAt.toISOString() });
    return {
      async listRecent() {
        const rows = await collection.find({ roomId: 'general' }).sort({ createdAt: -1, _id: -1 }).limit(100).toArray();
        return rows.reverse().map(toWire);
      },
      async insert({ name, text }) {
        const row = { roomId: 'general', name, text, createdAt: new Date() };
        const result = await collection.insertOne(row);
        return toWire({ ...row, _id: result.insertedId });
      },
      close: () => client.close(),
    };
  } catch (error) { await client.close(); throw error; }
}
