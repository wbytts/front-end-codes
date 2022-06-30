var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'node-test',
});
connection.connect();

function processRow(row, callback) {
  console.log('row ===> ', row);
  callback();
}

var query = connection.query('SELECT * FROM test;');
query
  .on('error', function (err) {
    // Handle error, an 'end' event will be emitted after this as well
  })
  .on('fields', function (fields) {
    // the field packets for the rows to follow
    console.log('fieids ===> ', JSON.stringify(fields));
  })
  .on('result', function (row) {
    // Pausing the connnection is useful if your processing involves I/O
    connection.pause();

    processRow(row, function () {
      connection.resume();
    });
  })
  .on('end', function () {
    // all rows have been received
  });

connection.end();
