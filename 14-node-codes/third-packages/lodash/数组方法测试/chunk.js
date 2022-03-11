/*
_.chunk(array, [size=1])
将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块.
返回一个包含拆分区块的新数组

英：chunk 块
*/
const _ = require('lodash');


let res1 = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log('res1: ', res1);


let res2 = _.chunk(['a', 'b', 'c', 'd'], 3);
console.log('res2: ', res2);



