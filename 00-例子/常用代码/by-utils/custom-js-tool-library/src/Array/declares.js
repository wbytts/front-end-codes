function map(arr, callback) { // 声明一个空的数组
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        result.push(callback(arr[i]), i);
    }
    // 返回结果
    return result;
}

/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {*} arr
 * @param {*} callback
 * @param {*} initVal
 * @return {*}
 */
function reduce(arr, callback, initVal) {
    // 声明变量
    let result = initVal;
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        result = callback(result, arr[i]);
    }
    // 返回最终的结果
    return result;
}

/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {Array} arr
 * @param {Function} callback
 */
function filter(arr, callback) {
    // 声明空数组
    let result = [];
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        let res = callback(arr[i], i);
        // 判断 如果为真 追加到result中
        if (res) {
            result.push(arr[i]);
        }
    }
    // 返回结果
    return result;
}
/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {Array} arr
 * @param {Function} callback
 * @return {*}
 */
function find(arr, callback) {
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        let res = callback(arr[i], i);
        // 判断
        if (res) {
            // 返回当前正在遍历的元素
            return arr[i]
        }
    }
    // 如果没有遇到满足条件的
    return undefined;
}

/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {Array} arr
 * @param {Function} callback
 * @return {*}
 */
function findIndex(arr, callback) {
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        let res = callback(arr[i], i);
        // 判断
        if (res) {
            // 返回当前正在遍历的元素
            return i
        }
    }
    // 如果没有遇到满足条件的
    return -1;
}
/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {Array} arr
 * @param {Function} callback
 * @return {*}
 */
function every(arr, callback) {
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调,如果回调执行返回结果为false
        if (!callback(arr[i], i)) {
            return false
        }
    }
    // 如果都满足则返回 true
    return true
}
/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {Array} arr
 * @param {Function} callback
 * @return {*}
 */
function some(arr, callback) {
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调,如果回调执行返回结果为 true
        if (callback(arr[i], i)) {
            return true
        }
    }
    // 如果都满足则返回 false
    return false
}