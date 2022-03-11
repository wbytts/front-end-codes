/*
 * @Descripttion: 
 * @version: 
 * @Author: EayCome
 * @Date: 2021-02-10 19:05:57
 * @LastEditors: EayCome
 * @LastEditTime: 2021-02-10 19:11:13
 */

//  引入 nodeJS 内置模块 path
const path = require('path')
module.exports = {
    // 模式
    mode: 'development', // 也可以使用 production
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        // 打包文件夹
        path: path.resolve(__dirname, 'dist'),
        // 打包文件
        filename: 'myToolLibrary.js',
        // 向外暴露的对象的名称
        library: 'Library',
        // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
        libraryTarget: 'umd',
    },
}