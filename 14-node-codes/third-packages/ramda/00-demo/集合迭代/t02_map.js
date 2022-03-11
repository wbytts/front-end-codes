const R = require('ramda');

let arr = [1, 3, 5, 2, 4];

let result = R.map(x => x * x)(arr);
console.log(result);
