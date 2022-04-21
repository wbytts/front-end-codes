// 默认的文件加载器是 fs.readFileSync
// 如果你想要的自定义它, 设置ejs.fileLoader 即可。

let ejs = require('ejs');

let myFileLoader = function (filePath) {
  return 'myFileLoader: ' + fs.readFileSync(filePath);
};

ejs.fileLoader = myFileLoader;
