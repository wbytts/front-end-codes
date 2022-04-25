import { LowSync, JSONFileSync } from 'lowdb';

// synchronous adapter
const db = new LowSync(new JSONFileSync('db.json'));
db.read();
db.write();
