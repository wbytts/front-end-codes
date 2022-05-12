const fs = require('fs');

// 不加编码的话会得到一个 String 类型

// 同步读取文件内容
var result1 = fs.readFileSync('E:\\temp\\test.txt');
console.log(result1) // 如果是直接写文件名，读出来的是字符串的内存数据，需要自己解码
console.log(result1.toString('utf8'))

// 读取文件的时候同时指定编码
var result2 = fs.readFileSync('E:\\temp\\test.txt', 'utf8');
console.log(result2);



