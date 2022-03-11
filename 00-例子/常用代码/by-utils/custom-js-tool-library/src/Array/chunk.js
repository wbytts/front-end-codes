/*
 * @Descripttion: 
 * @version: 
 * @Author: EayCome
 * @Date: 2021-02-09 19:41:12
 * @LastEditors: EayCome
 * @LastEditTime: 2021-02-09 19:49:02
 */

/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {Array} arr
 * @param {Number} size
 * @return {*}
 */
function chunk(arr, size = 1) {
    // 判断
    if (arr.length === 0) return [];
    // 声明两个变量
    let result = [];
    let temp = [];
    // 遍历
    arr.forEach(item => {
        // 判断tmp元素的长度是否为0
        if (temp.length === 0) {
            // 将 tmp 压入到 result
            result.push(temp);
        }
        // 将元素压入temp数组中
        temp.push(item);
        // 判断
        if (temp.length === size) {
            temp = [];
        }
    })
    return result;
}