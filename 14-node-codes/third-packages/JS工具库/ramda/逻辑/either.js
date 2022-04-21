const R = require('ramda');

// R.either：接收两个函数作为参数，只要有一个返回 true，就返回 true，否则返回 false，相当于 || 运算
var gt10 = x => x > 10;
var even = x => x % 2 === 0;
var gt10OrEven = R.either(gt10, even);

console.log(gt10OrEven(2));
console.log(gt10OrEven(3));
console.log(gt10OrEven(12));
console.log(gt10OrEven(13));
