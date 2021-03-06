const R = require('ramda');
/*
假设 g 代表柯里化的三元函数，_ 代表 R.__，则下面几种写法是等价的：
    g(1, 2, 3)
    g(_, 2, 3)(1)
    g(_, _, 3)(1)(2)
    g(_, _, 3)(1, 2)
    g(_, 2, _)(1, 3)
    g(_, 2)(1)(3)
    g(_, 2)(1, 3)
    g(_, 2)(_, 3)(1)
 */
const greet = R.replace('{name}', R.__, 'Hello, {name}!');
console.log(greet('Alice')); //=> 'Hello, Alice!'
