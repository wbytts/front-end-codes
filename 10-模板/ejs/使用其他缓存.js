
/*
EJS 附带了一个基本的进程内缓存，用于缓在渲染模板过程中所生成的临时 JavaScript 函数。
通过 Node 的 `lru-cache` 库可以很容易地加入 LRU 缓存：
*/
let ejs = require('ejs'),
    LRU = require('lru-cache');
ejs.cache = LRU(100); // 具有 100 条内容限制的 LRU 缓存

/*
如果要清除 EJS 缓存，调用 ejs.clearCache 即可。
如果你正在使用的是 LRU 缓存并且需要设置不同的限额，则只需要将 `ejs.cache` 重置为 一个新的 LRU 实例即可。
*/

