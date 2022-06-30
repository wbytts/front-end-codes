const fs = require('fs');

// 异步写入
// fs.writeFile(file, data[, options], callback)

// 默认以 utf8 的格式写入内容到文件中

fs.writeFile('E:/temp/a.txt', 'hello123', err => {
  // 若 err 为 null，则表示文件写入成功
  console.log(err);
});



