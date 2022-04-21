const R = require('ramda');

// R.adjust
// Number -> (a -> a) -> [a] -> [a]
// 将数组中指定索引处的值替换为经函数变换的值

// 解释：数字 -> 函数 -> 数组 -> 数组
/*
  第一个数字表示要修改的元素的位置
  第二个表示修改的逻辑，接收元素为参数，返回值作为修改的结果
  第三个参数是要修改的数组数据
 */

let arr = [1, 2, 3, 4, 5];
arr = R.adjust(2)(x => x * x)(arr);
console.log(arr);
