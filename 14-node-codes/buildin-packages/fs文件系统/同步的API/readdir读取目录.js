const fs = require('fs');

// 读取一个目录，返回目录下的文件、文件夹列表
var result = fs.readdirSync('f:/temp');

for (var item of result) {
  var fStat = fs.statSync('f:/temp/' + item);
  if (fStat.isFile()) {
    console.log('文件---' + item);
  } else {
    console.log('目录---' + item);
  }
}
