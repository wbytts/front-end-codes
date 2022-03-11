// console.table(tabularData[, properties])
// 尝试用 tabularData 的属性的列（或使用 properties）和 tabularData 的行构建表格并记录它
// 如果无法将其解析为表格，则回退到仅记录参数

// 这些无法解析为表格数据
console.table(Symbol());
// Symbol()

console.table(undefined);
// undefined

console.table([
  { a: 1, b: 'Y' },
  { a: 'Z', b: 2 },
]);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘

console.table(
  [
    { a: 1, b: 'Y' },
    { a: 'Z', b: 2 },
  ],
  ['a']
);
// ┌─────────┬─────┐
// │ (index) │  a  │
// ├─────────┼─────┤
// │    0    │  1  │
// │    1    │ 'Z' │
// └─────────┴─────┘
