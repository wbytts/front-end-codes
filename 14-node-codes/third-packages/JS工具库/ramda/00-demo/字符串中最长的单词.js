const R = require('ramda');

// 求一个字符串中，最长的单词的长度
const getWordMaxLength = R.pipe(
  R.split(' '), // 先按空切分
  R.map(R.length), // 将单词数组转换为长度数组
  R.reduce(R.max)(0) // 求出最大的长度
);

const str = 'hello world my name is wby';
const result = getWordMaxLength(str);
console.log(result);
