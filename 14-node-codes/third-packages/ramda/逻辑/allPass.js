const R = require('ramda');

// R.allPass：接收一个函数数组作为参数，只有它们都返回 true，才返回true，否则返回false
// [(*… → Boolean)] → (*… → Boolean)
// 该函数返回一个柯里化的函数，参数个数由列表中参数最多的 predicate 决定

var gt10 = x => x > 10;
var even = x => x % 2 === 0;
var ap = R.allPass([gt10, even]);
console.log(ap(2));
console.log(ap(3));
console.log(ap(12));
console.log(ap(13));
