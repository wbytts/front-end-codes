import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';
import { nanoid } from 'nanoid';
import axios from 'axios';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, '../db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();
db.data = db.data || {};

db.data.data = [];
db.data.data.push({ id: 1, data: 'Hello' });
db.data.data.push({ id: 2, data: 'Hello' });
db.data.data.push({ id: 3, data: 'Hello' });
db.data.data.push({ id: 4, data: 'Hello' });

await db.write();
