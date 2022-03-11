const _ = require('lodash');
/*
_.concat(array, [values])
创建一个新数组，将array与任何数组 或 值连接在一起
*/
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
