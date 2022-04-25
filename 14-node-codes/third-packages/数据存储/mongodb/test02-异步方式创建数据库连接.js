// npm install mongodb
const {MongoClient} = require('mongodb');

// MongoDB数据库连接地址
const mongodbUrl = 'mongodb://localhost:27017';
// MongoDB 数据库名
const dbName = 'demo';

// 创建连接客户端
const client = new MongoClient(mongodbUrl, {useUnifiedTopology: true});

MongoClient.connect(mongodbUrl, {useUnifiedTopology: true}, (err, client) => {
  if(err) {
    console.log('数据库连接失败!');
    return;
  }
  console.log('数据库连接成功!');
  const db = client.db(dbName);
  // 操作数据库
  client.close();
});





