const R = require('ramda');

/*
identity 可以接受多个参数，但总是返回首个参数。

如果想要返回除首个参数之外的参数，可以使用更通用的 nthArg 函数。
但 nthArg 不如 identity 用的频繁。
*/

const alwaysDrivingAge = age => ifElse(lt(__, 16), always(16), identity)(age)
