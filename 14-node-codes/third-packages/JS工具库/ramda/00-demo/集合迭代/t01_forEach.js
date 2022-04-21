const R = require('ramda');

let arr = [1, 3, 5, 2, 4];


R.forEach(x => console.log(`${x * x}`), arr);
R.forEach(x => console.log(`${x * x}`))(arr);
R.forEach()(x => console.log(`${x * x}`))(arr);

