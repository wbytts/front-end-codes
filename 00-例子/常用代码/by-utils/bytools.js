function call(fn, obj, ...args) {
    // 判断
    if (obj === undefined || obj === null) {
        obj = globalThis; // 全局对象
    }
    // 为 obj 对象添加临时的方法
    obj.temp = fn;
    // 此时，可以调用 temp 来实现调用 fn 的效果，并且此时temp的this是指向 obj 的
    let result = obj.temp(...args);
    // 删除 temp 方法
    delete obj.temp;
    return result;
}

function apply(fn, obj, args) {
    // 判断
    if (obj === undefined || obj === null) {
        obj = globalThis;
    }
    // 为obj添加临时方法
    obj.temp = fn;
    // 执行函数
    let result = obj.temp(...args);
    // 删除临时属性
    delete obj.temp;
    // 返回结果
    return result;
}


function bind(fn, obj, ...args) {
    // 返回一个新的函数，bind调用时，传入的参数是靠前的，返回的函数中传入的参数是靠后的
    return function(...args2) {
        // 调用指定函数，并改变this指向
        return call(fn, obj, ...args, ...args2);
    };
}

/*
  函数节流：throttle
  在函数需要频繁触发时，函数执行一次后，只有大于设定的执行周期后才会执行第二次
  适合多次事件按时间做平均分配触发
*/
function throttle(callback, wait) {
    // 定义一个开始时间
    let start = 0;
    // 返回结果是一个函数
    return function(e) {
        // 获取当前的时间戳
        let now = Date.now();
        // 判断
        if (now - start >= wait) {
            //若满足条件，则执行回调
            callback.call(this, e);
            // 修改开始时间
            start = now;
        }
    };
}

/*
  函数防抖：debounce
  从上一次被调用后，延迟 wait 毫秒后调用 callback
*/
function debounce(callback, wait) {
    // 初始化定时器变量
    let timeId = null;
    // 返回一个函数
    return function(e) {
        if (timeId !== null) {
            // 表明有一个定时器在跑
            clearTimeout(timeId); // 清空上一个定时器
        }
        // 启动一个定时器
        timeId = setTimeout(() => {
            // 执行回调（箭头函数无this）
            callback.call(this, e);
            timeId = null; // 重置定时器变量
        }, wait);
    };
}

/**
 *  返回一个由回调函数的返回值组成的新数组
 */
function map(arr, callback) {
    // 声明一个空的数组
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        result.push(callback(arr[i], i));
    }
    // 返回结果
    return result;
}

/**
 * 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中
 * 传给下次回调函数，并返回最后一次回调函数的返回值
 */
function reduce(arr, callback, initValue) {
    let result = initValue;
    for (let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i]);
    }
    // 返回最终的结果
    return result;
}


/**
 * filter
 */
function filter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i], i);
        if (res) {
            result.push(arr[i]);
        }
    }
    return result;
}

/**
 * 找到数组中第一个满足条件的值
 */
function find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i], index);
        if (res) {
            return arr[i];
        }
    }
    // 如果没有遇到满足条件的，返回undefiend
    return undefined;
}

/**
 * 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回-1
 */
function findIndex() {
    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i], index);
        if (res) {
            return i;
        }
    }
    // 如果没有遇到满足条件的，返回undefiend
    return -1;
}

/**
 * 如果数组中的每个元素都满足测试函数，则返回true，否则返回false
 */
function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i], index);
        if (!res) {
            return false;
        }
    }
    return true;
}

/**
 * 如果数组中至少有一个元素满足测试函数，则返回true，否则返回false
 */
function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i], index);
        if (res) {
            return true;
        }
    }
    return false;
}


/**
 * 数组去重 forEach + indexOf
 * 本质是双重遍历，效率略低
 */
function unique(arr) {
    let result = [];
    arr.forEach(item => {
        // 检测result数组中是否包含这个元素
        if (result.indexOf(item) === -1) {
            // 若没有该元素，则插入到 result中
            result.push(item);
        }
    });
    return result;
}

/**
 * 数组去重 forEach + 对象容器
 * 只需要一次遍历，效率较高
 */
function unique2(arr) {
    const result = [];
    const obj = {};
    arr.forEach(item => {
        if (obj[item] === undefined) {
            // 将 item 作为下标存储在 obj 中
            obj[item] = true;
            result.push(item);
        }
    });
    return result;
}

/**
 * 数组去重 ES6 的 from + Set 或 ... + Set
 * 代码简洁
 */
function unique3(arr) {
    /*
      // 将数组转化为集合 Set
      let set = new Set(arr);
      // 再将 set 展开创建一个数组
      let result = [...set];
      return result;
    */
    return [...new Set(arr)];
}

/**
 * 数组合并
 * 将n个数组或值与当前数组合并生成一个新数组
 */
function concat(arr, ...values) {
    const result = [...arr];
    values.forEach(v => {
        if (Array.isArray(v)) {
            result.push(...v);
        } else {
            result.push(v);
        }
    });
    return result;
}


/**
 * 数组切片
 */
function slice(arr, begin, end) {
    // 若arr数组长度为空
    if (arr.length === 0) {
        return [];
    }
    begin = begin || 0;
    if (begin >= arr.length) {
        return [];
    }
    end = end || arr.length;
    if (end < begin) {
        end = arr.length;
    }

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i >= begin && i < end) {
            result.push(arr[i]);
        }
    }
    return result;
}


/**
 * 数组扁平化
 */
function flatten(arr) {
    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result = result.concat(item);
        }
    });
    return result;
}
