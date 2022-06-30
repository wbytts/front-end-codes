const fs = require('fs');

// 异步读取文件，需要指定回调函数，处理读取的结果
fs.readFile('E:\\temp\\test.txt', function (err, data) {
  // 如果读取成功，err为null，如果读取失败，err为错误对象
  // 直接读取，得到文件的内存数据
  console.log(data);
  // 可以进行字符串解码，得到字符串内容
  console.log(data.toString('utf8'));
});

// 也可以在读取的时候就指定编码（第二个参数换为编码名称）
// 这样读取出来的data，直接就是字符串了
fs.readFile('E:\\temp\\test.txt', 'utf8', (err, data) => {
  console.log(data);
});

// 指定更多选项
fs.readFile('E:\\temp\\test.txt', { flag: 'r', encoding: 'utf8' }, (err, data) => {
  console.log(data);
});
