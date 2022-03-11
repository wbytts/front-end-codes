/*
 * @Descripttion: 
 * @version: 
 * @Author: EayCome
 * @Date: 2021-02-09 18:44:20
 * @LastEditors: EayCome
 * @LastEditTime: 2021-02-09 19:02:58
 */

function concat(arr, ...args) {
    // 声明一个空数组
    const result = [...arr];
    // 遍历数组
    args.forEach(item => {
        // 判断 item是否为数组
        if (Array.isArray(item)) {
            result.push(...item)
        } else {
            result.push(item)
        }
    })
    return result
}

function slice(arr, begin, end) {
    // 若 arr 数组长度为空
    if (arr.length === 0) {
        return [];
    }
    // 判断 begin
    begin = begin || 0;
    if (begin >= arr.length) {
        return [];
    }
    // 判断 end
    end = end || arr.length;
    if (end < begin) {
        end = arr.length
    }
    // 声明一个空数组
    const result = [];
    // 遍历对象
    for (let i = 0; i < arr.length; i++) {
        if (i >= begin && i < end) {
            // 将对应下标元素压入数组
            result.push(arr[i])
        }
    }
    return result;
}