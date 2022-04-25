const util = require('util');
const fs = require('fs');

// 将回调形式的函数转换成 Promise 风格的函数
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./readFile.js', 'utf8').then(value => console.log(value));
