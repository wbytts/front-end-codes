const fs = require('fs');

// 管道流：主要用于复制大文件

// 创建输入流
const readStream = fs.createReadStream('f:/temp/尚硅谷Vue技术全家桶资料（天yu老师主讲）.zip');
// 创建输出流
const writeStream = fs.createWriteStream('f:/temp/test.zip');
// 接通管道
readStream.pipe(writeStream);




