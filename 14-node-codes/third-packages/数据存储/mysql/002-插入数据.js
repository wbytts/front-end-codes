var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'node-test',
});
connection.connect();

var sql = `insert into test (id, text) values (2, "你好啊");`;

connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  console.log('返回结果:', results);
  console.log('字段:', fields);
  connection.end();
});
