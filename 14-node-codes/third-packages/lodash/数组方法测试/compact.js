/*
创建一个新数组，包含原数组中所有的非假值元素。
例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。

返回过滤掉假值的新数组
*/

const _ = require('lodash');

let arr = [0, 1, false, 2, '', 3];
let result = _.compact(arr);
console.log(arr); // 不会改变原来的数组
console.log(result);

