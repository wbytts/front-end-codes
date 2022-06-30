var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'node-test',
  charset: 'utf8',
});

pool.query(`SELECT 1 + 1 AS solution;`, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

/*
pool.getConnection() -> connection.query() -> connection.release()
*/

pool.getConnection(function (err, connection) {
  if (err) throw err; // not connected!

  // 使用连接
  connection.query('SELECT * FROM test;', function (error, results, fields) {
    // 当使用完的时候，释放连接
    connection.release();
    // 如果要关闭或者从连接池移除这个连接，可以使用 connection.destroy()
    if (error) throw error;

    // 不要在释放之后再使用连接
    console.log('结果', results);
  });
});

pool.end(function (err) {
  // 在这里，所有的连接已经结束了
  console.log('所有的连接已关闭');
});
