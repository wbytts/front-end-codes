const fs = require('fs');

const fileReadStream = fs.createReadStream('D:\\projects\\Node\\nodejs-demo-001-base\\data\\a.txt');

let count = 0;
let str = '';

// 读到数据时
fileReadStream.on('data', data => {
  str += data;
  count++;
});

// 读取完成时
fileReadStream.on('end', () => {
  console.log(str);
  console.log('count=' + count);
});

// 读取发生错误时
fileReadStream.on('error', err => {
  console.log(err);
});
