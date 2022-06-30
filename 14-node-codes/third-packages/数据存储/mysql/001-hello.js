const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'node-test',
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('连接的id: ' + connection.threadId);
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('结果: ', results[0].solution);
});

connection.end();
