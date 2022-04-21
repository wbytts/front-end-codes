# mime

NPM: https://www.npmjs.com/package/mime

- 根据拓展名获取资源类型
- 根据资源类型获取拓展名

安装：`npm install mime`

使用方法：
```js
const mime = require('mime');

mime.getType('txt');                    // ⇨ 'text/plain'
mime.getExtension('text/plain');        // ⇨ 'txt'
```



