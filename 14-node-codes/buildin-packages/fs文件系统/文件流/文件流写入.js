const fs = require('fs');

var str = '123123123123123123123123123123123123123123123123';

const writeStream = fs.createWriteStream('f:/temp/a.txt');

writeStream.write(str);

// 标记写入完成
writeStream.end();


// 不加 writeStream.end(); 则触发不了这个事件
writeStream.on('finish', () => {
  console.log('写入完成！');
});
