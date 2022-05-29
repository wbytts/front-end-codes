const R = require('ramda');

// R.test：判断一个字符串是否匹配给定的正则表达式
console.log(R.test(/^x/)('xyz'));
console.log(R.test(/^x/)('abc'));
