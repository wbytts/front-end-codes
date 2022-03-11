const R = require('ramda');

function fun(a, b, c) {
  return a * b * c;
}

// 本来是这样子的
console.log(fun(3, 4, 5));

let fun2 = R.curry(fun);
console.log(fun2(3)(4)(5));

