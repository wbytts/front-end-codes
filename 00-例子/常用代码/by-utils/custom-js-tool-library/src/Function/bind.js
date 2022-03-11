function bind(Fn, Obj, ...args) {
    // 返回一个新的函数
    return function(...args2) {
        // 执行 call 函数
        return call(Fn, obj, ...args, ...args2);
    }
}