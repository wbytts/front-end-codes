const R = require('ramda');

// R.all
// (a -> Boolean) -> [a] -> Boolean
// 如果列表中的所有元素都满足 predicate，则返回true，否则返回false
// 若第二个参数自身存在 all方法，则调用自身的all方法
// 若在列表位置中给出 transfomer，则用作 transducer

// 一个判断的函数(predicate) -> 需要判断的数组 -> 数组所有元素是否都满足判断函数

const eq3 = R.equals(3);
console.log(R.all(eq3)([3, 3, 3, 3]));
console.log(R.all(eq3)([3, 3, 1, 3]));
