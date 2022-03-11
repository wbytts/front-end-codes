/*
 * @Descripttion: 
 * @version: 
 * @Author: EayCome
 * @Date: 2021-02-09 18:28:03
 * @LastEditors: EayCome
 * @LastEditTime: 2021-02-09 18:42:29
 */

function unqiue(arr) {
    // 声明一个空数组
    const result = [];
    // 遍历原始数组
    arr.forEach(item => {
        // 检测 result数组中是否包含这个元素
        if (result.indexOf(item) === -1) {
            // 若没有该元素,则插入到数组中
            result.push(item);
        }
    })
    return result;
}


function unqiue2(arr) {
    // 声明一个空数组
    const result = [];
    // 声明一个空对象
    const obj = {};
    // 遍历数组
    arr.forEach(item => {
        if (obj[item] === undefined) {
            // 将 item 作为下标存储在 obj 中
            obj[item] = true
            result.push(item)
        }
    });
    // 返回结果
    return result;
}


function unqiue3(arr) {
    // 将数组转化为集合 Set
    // let set = new Set(arr);
    // 将 set 展开创建一个数组
    // let array = [...set]
    // 返回结果
    // return array
    return [...new Set(arr)];
}