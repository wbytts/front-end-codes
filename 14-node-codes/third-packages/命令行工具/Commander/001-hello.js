// 为简化使用，Commander 提供了一个全局对象
const { program } = require('commander');

// 如果程序较为复杂，用户需要以多种方式来使用 Commander，如单元测试等。创建本地Command对象是一种更好的方式：
// const { Command } = require('commander');
// const program = new Command();


// 要在 ECMAScript 模块中使用命名导入，可从commander/esm.mjs中导入
// import { Command } from 'commander/esm.mjs';
// const program = new Command();

// TypeScript 用法：
// import { Command } from 'commander';
// const program = new Command();
