# mkdirp

NPM: https://www.npmjs.com/package/mkdirp

安装：`npm install mkdirp --save`

使用：
```js
const mkdirp = require('mkdirp')

// return value is a Promise resolving to the first directory created
mkdirp('/tmp/foo/bar/baz').then(made =>
  console.log(`made directories, starting with ${made}`))
```

同步版本：
```js
mkdirp.sync(dir, opts)
```
