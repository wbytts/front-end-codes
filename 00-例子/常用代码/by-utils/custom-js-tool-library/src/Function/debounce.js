function debounce(callback, time) {
    // 定时器变量
    let timeId = null;
    // 返回一个函数
    return function(e) {
        // 判断
        if (timeId !== null) {
            // 清空定时器
            clearTimeout(timeId);
        }
        // 启动定时器
        timeId = setTimeout(() => {
            // 执行回调
            callback.call(this, e);
            // 重置计时器变量
            timeId = null;
        }, time)
    }
}