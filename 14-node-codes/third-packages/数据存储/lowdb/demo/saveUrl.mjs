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
db.data.urls = db.data.urls || [];

class MyUrl {
  constructor(url, desc) {
    this.id = nanoid();
    this.url = url;
    this.desc = desc;
  }

  async getUrlInfo() {
    const res = await axios.get(this.url);
    const title = res.data.match(/<title>(.*?)<\/title>/);
    this.title = title[1];
  }
}

async function saveUrl(url) {
  console.log(url);
  let myUrl = new MyUrl(url);
  try {
    await myUrl.getUrlInfo();
  } catch (e) {
    console.log('==> 解析出错!');
    return;
  }
  console.log('==>' + myUrl.title);
  const index = db.data.urls.findIndex(u => u.url === myUrl.url);
  if (index === -1) {
    db.data.urls.push(myUrl);
  } else {
    db.data.urls[index] = myUrl;
  }
}

await saveUrl('http://www.baidu.com');
await saveUrl('http://fanyi.baidu.com/');
await saveUrl('https://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html');
await saveUrl('https://blog.csdn.net/u012373281/article/details/89601509');
await saveUrl('http://springboot.fun');
await saveUrl('http://springcloud.fun');
await saveUrl('https://www.ruanyifeng.com/blog/');
await saveUrl('https://www.ruanyifeng.com/');
await saveUrl('http://nodejs.cn/api/');

await db.write();
