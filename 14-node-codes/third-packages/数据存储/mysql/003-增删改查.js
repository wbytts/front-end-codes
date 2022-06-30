const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'node-test',
  charset: 'utf8',
  // debug: true, // 打印详细日志
  // dateStrings: ['TIMESTAMP'], // 强制时间都返回时间戳，可以是true/false或者一个数组（TIMESTAMP, DATETIME, DATE），默认为false
});
connection.connect();

const sqls = {
  // 查询
  queryAll: () => `select * from test;`,
  // 插入
  insert: (id, text) => `insert into test (id, text) values ('${id}', ${text});`,
  // 根据id查询
  queryById: id => `select * from test where id = '${id}';`,
};

connection.query(sqls.queryAll(), function (error, results, fields) {
  if (error) throw error;
  console.log('返回结果:', results);
});

connection.end(() => {
  console.log('数据库连接关闭了');
});
// connection.destroy(); // 和 end一样，但是没有回调
