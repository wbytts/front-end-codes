const R = require('ramda');

let arr = [1, 3, 5, 2, 4];

let sum = R.reduce((r, x) => r + x)(0)(arr);

console.log(sum);
