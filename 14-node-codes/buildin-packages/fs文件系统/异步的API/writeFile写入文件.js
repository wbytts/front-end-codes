const fs = require('fs');

// 异步写入
// fs.writeFile(file, data[, options], callback)
fs.writeFile('./temp/a.txt', 'hello', err => {
  console.log(err);
});
