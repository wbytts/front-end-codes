const x = 1;
const y = 2;
const z = 3;
console.count('x 的值为 ' + x + ' 且已经检查了几次？');
console.count('x 的值为 ' + x + ' 且已经检查了几次？');
console.count('y 的值为 ' + y + ' 且已经检查了几次？');

// count 方法会对打印的字符串的次数进行计数，并在其旁边打印计数
console.log('---------------------------------------------------------------------------------');

const oranges = ['橙子', '橙子'];
const apples = ['苹果'];
oranges.forEach(fruit => {
  console.count(fruit);
});
apples.forEach(fruit => {
  console.count(fruit);
});

// console.countReset(label); // 重置特定于 label 的内部计数器
