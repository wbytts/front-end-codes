/*
AMD模块的写法：
  如果一个模块不依赖其他模块，那么可以直接定义在 define() 函数中
  如果这个模块还依赖其他模块，那么define的第一个参数，必须是一个数组，指明该模块的依赖性
*/

// define(function() {})

define(['jquery'], function ($) {
  console.log($);
});
