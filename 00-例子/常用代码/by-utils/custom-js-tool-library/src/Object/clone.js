/*
 * @Descripttion: 
 * @version: 
 * @Author: EayCome
 * @Date: 2021-02-10 11:55:54
 * @LastEditors: EayCome
 * @LastEditTime: 2021-02-10 14:43:24
 */


function clone1(target) {
    // 类型判断
    // 对象 数组 null
    if (typeof target === 'object' && target !== null) {
        // 判断数据是否为数据
        if (Array.isArray(target)) {
            return [...target];
        } else {
            // 对象
            return {...target }
        }
    } else {
        return target;
    }
}



function clone2(target) {
    // 判断
    if (typeof target === 'object' && target !== null) {
        // 创建一个容器
        const result = Array.isArray(target) ? [] : {};
        // 遍历 target 数据
        for (let key in target) {
            // 判断当前对象身上是否包含该属性
            if (target.hasOwnProperty(key)) {
                // 将属性设置到 result 结果数据中
                result[key] = target[key];
            }
        }
        return result;
    } else {
        return target;
    }
}


function deepClone1(target) {
    // 通过数据创建 JSON 格式的字符串
    let str = JSON.stringify(target);
    // 将JSON字符串创建为 JS 数据
    let data = JSON.parse(str);
    return data;
}

function deepClone2(target) {
    // 检测数据类型
    if (typeof target === 'object' && target !== null) {
        // 声明一个容器
        const result = Array.isArray(target) ? [] : {};
        // 遍历对象
        for (let key in target) {
            // 检测属性是否为对象本身(不能拷贝原型对象的属性)
            if (target.hasOwnProperty(key)) {
                // 拷贝
                result[key] = deepClone2(target[key])
            }
        }
        return result
    } else {
        return target
    }
}

function deepClone3(target, map = new Map()) {
    // 检测数据类型
    if (typeof target === 'object' && target !== null) {
        // 克隆数据之前,进行判断,数据之前是否克隆过
        let cache = map.get(target);
        if (cache) {
            return cache;
        }
        // 声明一个容器
        const result = Array.isArray(target) ? [] : {};
        // 将新的结果存储到容器中
        map.set(target, result);
        // 遍历对象
        for (let key in target) {
            // 检测属性是否为对象本身(不能拷贝原型对象的属性)
            if (target.hasOwnProperty(key)) {
                // 拷贝
                result[key] = deepClone3(target[key], map);
            }
        }
        return result
    } else {
        return target
    }
}



function deepClone4(target, map = new Map()) {
    // 检测数据类型
    if (typeof target === 'object' && target !== null) {
        // 克隆数据之前,进行判断,数据之前是否克隆过
        let cache = map.get(target);
        if (cache) {
            return cache;
        }
        // 判断目标数据类型 
        let isArray = Array.isArray(target);
        // 声明一个容器
        const result = isArray ? [] : {};
        // 将新的结果存储到容器中
        map.set(target, result);
        // 遍历对象
        // 如果目标数据为数据
        if (isArray) {
            // forEach 遍历
            target.forEach((item, index) => {
                result[index] = deepClone4(item, map);
            });
        } else {
            // 如果是对象
            Object.keys(target).forEach(key => {
                result[key] = deepClone4(target[key], map);
            });
        }
        return result
    } else {
        return target
    }
}