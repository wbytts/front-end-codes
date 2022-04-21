var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'demo',
});
connection.connect();

var sqls = {
  // 查询所有用户
  queryAll: () => `select * from users`,
  // 插入一个用户
  insert: (name, age) => `insert into users (name,age) values ('${name}', ${age})`,
  // 根据用户名查询用户，模糊查询
  queryByName: name => `select * from users where name like '%${name}%'`,
};

connection.query(sqls.queryByName('a'), function (error, results, fields) {
  if (error) throw error;
  console.log('返回结果:', results);
  // console.log('字段:', fields);
});

connection.end();
