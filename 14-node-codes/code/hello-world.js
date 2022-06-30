
let arr = [1, 2, 3, 4, 5];

delete arr[2]

console.log(arr)
console.log(arr[2])

// function (exports, require, module, __filename, __dirname) {
console.log(arguments.callee.toString())

console.log(exports) // 导出对象
console.log(require) // 用于导入的函数
console.log(module) // 模块信息
console.log(__filename) // 当前脚本文件的路径
console.log(__dirname) // 当前脚本所在目录路径


