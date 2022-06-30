const fs = require('fs');

// 打开文件，获取一个文件的标识
var fd = fs.openSync('E:\\temp\\a.txt', 'r');
console.log(fs);

var buf = Buffer.alloc(200); // 申请内存
var content = fs.readSync(fd, buf, 0, 200, 0);
console.log(content);
