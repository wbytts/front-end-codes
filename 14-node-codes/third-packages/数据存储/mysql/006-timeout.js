var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'node-test',
});
connection.connect();

// Kill query after 60s
connection.query({ sql: 'SELECT COUNT(*) AS count FROM test;', timeout: 60000 }, function (error, results, fields) {
  if (error && error.code === 'PROTOCOL_SEQUENCE_TIMEOUT') {
    throw new Error('too long to count table rows!');
  }

  if (error) {
    throw error;
  }

  console.log(results[0].count + ' rows');
});

connection.end();
