// 为输出着色
console.log("\x1b[33m%s\x1b[0m", "你好");
// 当然，这是执行此操作的底层方法。 为控制台输出着色的最简单方法是使用库。

// Chalk 是一个这样的库，除了为其着色外，它还有助于其他样式的设置（例如使文本变为粗体、斜体或带下划线）。
// 可以使用 npm install chalk 进行安装，然后就可以使用它：
const chalk = require("chalk");
console.log(chalk.yellow("你好"));
// 与尝试记住转义代码相比，使用 chalk.yellow 方便得多，并且代码更具可读性。
// 更多的用法示例，详见上面的项目链接。
