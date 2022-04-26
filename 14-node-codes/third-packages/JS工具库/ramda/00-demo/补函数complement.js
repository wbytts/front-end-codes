const R = require('ramda');

/*
传入一个函数，返回一个新的函数
当原函数返回 "假值" 时，新函数返回 true；
原函数返回 "真值" 时，新函数返回 false，
即新函数是原函数的补函数。
*/

const isEven = x => x % 2 === 0;
const isOdd = R.complement(isEven);

let res = R.find(isOdd, [4, 3, 2, 1]);
console.log(res);



