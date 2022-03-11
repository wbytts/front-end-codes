const fs = require('fs');

// 打开文件，获取一个文件的标识
var fd = fs.openSync('D:\\projects\\Node\\nodejs-demo-001-base\\data\\a.txt', 'r');
console.log(fs);

var buf = Buffer.alloc(20);
var content = fs.readSync(fd, buf, 0, 20, 0);
console.log(content);
