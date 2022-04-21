const R = require('ramda');

// R.match：返回一个字符串的匹配结果
console.log(R.match(/[a-z]a/g)('bananas'));
console.log(R.match(/a/)('b'));
// console.log(R.match(/a/)(null)); // 报错，null没有match方法
