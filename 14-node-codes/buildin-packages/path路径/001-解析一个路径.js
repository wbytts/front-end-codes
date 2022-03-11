var path = require('path')

// 这个是当前代码所在的绝对路径
console.log(__dirname);

// 路径的拼接与解析
console.log(path.resolve(__dirname, '../'))  // 会识别上级文件夹写法返回上级的实际路径
console.log(path.parse(__dirname))

/*
{
  root: 'D:\\',
  dir: 'D:\\projects\\Node\\nodejs-demo-001-base\\src',
  base: 'path',
  ext: '',
  name: 'path'
}
*/
