/*
 * @Descripttion: 
 * @version: 
 * @Author: EayCome
 * @Date: 2021-02-10 00:03:09
 * @LastEditors: EayCome
 * @LastEditTime: 2021-02-10 00:08:14
 */

/**
 * @name: 
 * @msg: 
 * @param {Array} arr
 * @param {Number} size
 */
function drop(arr, size) {
    // 过滤原数组,产生新数组
    return arr.filter((value, index) => {
        // 判断
        return index >= size;
    })
}

function dropRight(arr, size) {
    return arr.filter((value, index) => {
        return index < arr.length - size;
    })
}