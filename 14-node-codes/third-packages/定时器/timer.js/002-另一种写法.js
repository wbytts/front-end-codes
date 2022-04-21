const Timer = require('timer.js');

var myTimer = new Timer({ tick: 1 / 1000 });
myTimer.on('tick', ms => console.log(ms));
myTimer.start(10);
