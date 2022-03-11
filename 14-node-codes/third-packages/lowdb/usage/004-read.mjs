import { Low, JSONFile } from 'lowdb';

// asynchronous adapter
const db = new Low(new JSONFile('db.json'));
// 如果文件不存在，JSONFile 和 JSONFileSync 适配器会将 db.data 设置为 null
db.data; // === null
console.log(db.data);
await db.read();
db.data; // !== null
console.log(db.data);
