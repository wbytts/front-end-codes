/*
  命令行传参的方式：
      node app.js joe
      node app.js name=joe

    获取参数值的方法是使用 Node.js 中内置的 process 对象
    它公开了 argv 属性，该属性是一个包含所有命令行调用参数的数组。
      第一个参数是 node 命令的完整路径。
      第二个参数是正被执行的文件的完整路径。
      所有其他的参数从第三个位置开始。
*/


console.log(process.argv);


// 可以使用循环迭代所有的参数（包括 node 路径和文件路径）：
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});


let params = process.argv.reduce((params, value, index) => {
  params[index] = value
  return params
}, []);

console.log('params == ', params);

console.log("-----------------------------------------------------------");
// 也可以通过创建一个排除了前两个参数的新数组来仅获取其他的参数：
const args1 = process.argv.slice(2); // 切掉前面的 node.exe 和 文件名，剩下的都是传递过来的参数了
console.log(args1);

console.log("-----------------------------------------------------------");
// 如果参数没有索引名称，则可以用 args[0] 这种访问
const args2 = process.argv.slice(2);
console.log(args2[0]);

console.log("-----------------------------------------------------------");
// 如果是  xxx=xxx 形式的传参
// 则 args[0] 是 name=joe，需要对其进行解析。 最好的方法是使用 minimist 库
// 使用这个库的时候，传参要加 --key=value
const args3 = require("minimist")(process.argv.slice(2));
console.log(args3["name"]);
