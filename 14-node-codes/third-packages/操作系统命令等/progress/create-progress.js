// Progress 是一个很棒的软件包，可在控制台中创建进度条。 使用 npm install progress 进行安装

// 以下代码段会创建一个 10 步的进度条，每 100 毫秒完成一步。 当进度条结束时，则清除定时器：
const ProgressBar = require("progress");

// 创建一个进度条
const bar = new ProgressBar(":bar", {
  total: 100
});

const timer = setInterval(() => {
  bar.tick(); // 进度条计时
  if (bar.complete) { // 当进度条完成的时候，清除计时器
    clearInterval(timer);
  }
}, 100);
