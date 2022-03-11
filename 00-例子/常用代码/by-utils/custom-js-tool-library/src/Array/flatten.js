/*
 * @Descripttion: 
 * @version: 
 * @Author: EayCome
 * @Date: 2021-02-09 19:04:21
 * @LastEditors: EayCome
 * @LastEditTime: 2021-02-09 19:37:05
 */

/**
 * @name: 数组扁平化
 * @test: test font
 * @msg: 
 * @param {*}
 * @return {*}
 */
function flatten1(arr) {
    // 声明空数组
    let result = [];
    // 遍历数据
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flatten1(item));
        } else {
            result = result.concat(item);
        }
    });
    // 返回结果
    return result;
}


function flatten2(arr) {
    // 声明空数组
    let result = [...arr];
    // 循环判断
    while (result.some(item => Array.isArray(item))) {
        result = [].concat(...result); // [] + [1, [2, 3, [4, 5]]] = [1,2,3,[4,5]]

        console.log(result)
    }
    return result
}