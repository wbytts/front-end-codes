const R = require('ramda');

// R.addIndex
/*
    (
        (a... -> b) ...
         ->
         [a] -> *
     )
    ->
    (   (a..., Int, [a] -> b) ...
         ->
         [a] -> *
     )
 */
// 通过向列表迭代函数的回调函数添加两个新的参数：当前索引、整个列表，创建新的列表迭代函数
// 注意，addIndex 只适用于迭代回调函数是首个参数、列表是最后一个参数的函数。（如果列表参数没有用到，后一个条件可以忽略）
// 例如，addIndex 可以将 R.map 转换为类似于 Array.prototype.map 的函数

/*
                原本map的参数：  元素本身
  R.addIndex(R.map)之后的参数：  元素本身, 当前索引, 整个列表
 */

const mapIndexed = R.addIndex(R.map);
let result = mapIndexed((val, idx) => idx + '-' + val)(['h', 'e', 'l', 'l', 'o']);
console.log(result);
