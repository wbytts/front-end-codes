const _ = require('lodash');

let arr = [1, 2, 3, 4, 5];

let result = _.remove(arr, x => x > 3);
console.log('arr:', arr); // 会改变原本的数组
console.log('result:', result);



