const R = require('ramda');

// compose 的工作方式跟 pipe 基本相同，除了其调用函数的顺序是从右到左，而不是从左到右。
// 思考：compose(f, g)(value) 等价于 f(g(value))

let f = x => x * x
let g = x => 2 * x

// f(x) = x * x
// g(x) = 2 * x
// f(g(x)) = 4 * x * x
let fg = R.compose(f, g);

console.log(fg(3));


