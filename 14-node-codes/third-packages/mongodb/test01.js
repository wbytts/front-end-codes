// npm install mongodb
const { MongoClient } = require('mongodb');

// MongoDB数据库连接地址
const mongodbUrl = 'mongodb://localhost:27017';
// MongoDB 数据库名
const dbName = 'demo';

// 创建连接客户端
const client = new MongoClient(mongodbUrl, { useUnifiedTopology: true });
// 连接数据库
client.connect(function (err) {
  if (err) {
    console.log('数据库连接失败!');
    return;
  }
  console.log('数据库连接成功!');
  const db = client.db(dbName);
  db.collection('user')
    .find()
    .toArray((err, data) => {
      console.log(data);
    });
  db.collection('user').insertOne({ name: '李四', age: 18, sex: '女' }, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('增加成功');
    // console.log(result);
    console.log(result.insertedId);
  });

  // 需要在异步操作完成后关闭数据库，不然会有问题
  // 比如数据库关闭了，查询任务还没执行完之类的
  // client.close();
});
