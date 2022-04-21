const R = require('ramda');

// R.split：按照指定的分隔符将字符串拆成一个数组

var splitByDou = R.split(',');
console.log(splitByDou('1,2,3,4,5'));

console.log(R.length());
