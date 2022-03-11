const Timer = require('timer.js');

var myTimer = new Timer({
  tick: 1 / 1000, // 计时频率，单位为秒
  ontick(ms) {
    console.log(`还剩 ${ms} 毫秒`);
  },
  onstart() {
    console.log('计时器启动');
  },
  onstop() {
    console.log('计时器停止');
  },
  onpause() {
    console.log('计时器暂停');
  },
  onend() {
    console.log('计时器结束');
  },
});

myTimer.start(10);
