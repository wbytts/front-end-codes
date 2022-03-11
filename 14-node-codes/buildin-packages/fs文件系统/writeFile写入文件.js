const fs = require('fs');

// 同步写入
var err = fs.writeFileSync('f:/temp/a.txt', 'hello');

// 异步写入
fs.writeFile('f:/temp/a.txt', 'hello', err => {
  console.log(err);
})
