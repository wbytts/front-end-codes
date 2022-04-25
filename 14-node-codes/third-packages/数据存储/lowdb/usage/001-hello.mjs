import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

// 读取JSON文件的数据，这个将会设置 db.data 的内容
await db.read();

// 如果JSON文件不存在，那么db.json会为null
// 设置默认的 data
db.data = db.data || {};
// db.data ||= { posts: [] } // node v15.x 之前这种写法不行

db.data.posts = [];
db.data.posts.push('hello world');

db.data.urls = [];
db.data.urls.push('http://www.baidu.com');

// 将db.data的内容写入JSON文件
await db.write();
