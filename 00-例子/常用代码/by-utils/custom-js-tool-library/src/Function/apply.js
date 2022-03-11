function apply(Fn, obj, args) {
    // 判断
    if (obj === undefined || obj === null) {
        obj = globalThis;
    }
    // 为 obj 添加一个临时的方法
    obj.temp = Fn;
    // 执行方法
    let result = obj.temp(...args);
    // 删除临时属性
    delete obj.temp
        // 返回结果
    return result
}