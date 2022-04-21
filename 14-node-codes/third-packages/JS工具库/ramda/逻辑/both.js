const R = require('ramda');

// R.both：接收两个函数作为参数，只有它们都返回 true，才返回true，否则返回false，相当于 && 运算
var gt10 = x => x > 10;
var even = x => x % 2 === 0;
var gt10AndEven = R.both(gt10, even);
console.log(gt10AndEven(2));
console.log(gt10AndEven(3));
console.log(gt10AndEven(12));
console.log(gt10AndEven(13));
