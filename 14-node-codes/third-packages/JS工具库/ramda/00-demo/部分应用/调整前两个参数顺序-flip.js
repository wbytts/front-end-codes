const R = require('ramda');

/*
flip 接受一个多元函数（元数 >= 2），返回一个元数相同的新函数，但前 2 个参数的顺序调换了。
它主要用于二元函数，但也可以用于一般函数。
*/

function fun(a, b, c, d) {
  console.log('a = ' + a);
  console.log('b = ' + b);
  console.log('c = ' + c);
  console.log('d = ' + d);
}


// 调换fun函数前两个参数的传参顺序
const flipFun = R.flip(fun);
flipFun(3, 4, 5, 6);

