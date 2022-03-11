// console.time([label])
// console.timeEnd([label])
// console.timeLog([label][, ...data])

// 启动可用于计算操作持续时间的计时器。 计时器由唯一的 label 标识
// 调用 console.timeEnd() 时使用相同的 label 停止计时器并将经过的时间以合适的时间单位输出到 stdout
// 例如，如果经过的时间是 3869 毫秒，则 console.timeEnd() 显示“3.869s”。

// 可以使用 time() 和 timeEnd() 轻松地计算函数运行所需的时间
const doSomething = () => console.log('测试');
const measureDoingSomething = () => {
  console.time('doSomething()');
  //做点事，并测量所需的时间。
  doSomething();
  console.timeEnd('doSomething()');
};
measureDoingSomething();
