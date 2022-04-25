const fs = require('fs');

// 异步写入
fs.writeFile('f:/temp/a.txt', 'hello', err => {
  console.log(err);
})
