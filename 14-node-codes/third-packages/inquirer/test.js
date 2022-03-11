const inquirer = require("inquirer");

var questions = [
  {
    type: "input",
    name: "name",
    message: "你叫什么名字?",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(`你好 ${answers["name"]}!`);
});
// Inquirer.js 可以执行许多操作，例如询问多项选择、展示单选按钮、确认等。
// 所有的可选方案都值得了解，尤其是 Node.js 提供的内置方案，
// 但是如果打算将 CLI 输入提升到更高的水平，则 Inquirer.js 是更优的选择。
