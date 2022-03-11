import { Low, JSONFile } from 'lowdb';

// asynchronous adapter
const db = new Low(new JSONFile('db.json'));
await db.read();
await db.write();
