// console.error
// 别名：console.warn

// 使用换行符打印到 stderr
// 可以传入多个参数，其中第一个用作主要消息，所有其他参数用作类似于 printf(3) 的替换值（所有参数都传给 util.format()）。
// 如果在第一个字符串中找不到格式化元素（例如 %d），则在每个参数上调用 util.inspect() 并将结果字符串值连接起来
// 有关详细信息，请参阅 util.format()
