//  console.log()，该方法会打印传入到控制台的字符串
// 有一个别名，叫做 console.debug()
/*
  别名：
    console.info()
    console.debug()
 */

// 如果传入对象，则它会呈现为字符串。
// 可以传入多个变量到 console.log
const x = 'x';
const y = 'y';
console.log(x, y);

// 也可以通过传入变量和格式说明符来格式化用语
console.log('我的%s已经%d岁', '猫', 2);
/*
  %s 会格式化变量为字符串
  %d 会格式化变量为数字
  %i 会格式化变量为其整数部分
  %o 会格式化变量为对象
  ......
*/
