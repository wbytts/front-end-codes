/*
 * @Descripttion: 
 * @version: 
 * @Author: EayCome
 * @Date: 2021-02-09 20:17:24
 * @LastEditors: EayCome
 * @LastEditTime: 2021-02-09 21:47:10
 */

/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {Array} arr
 * @param {...any} args
 * @return {*}
 */
function pull(arr, ...args) {
    // 声明空数组 保存删掉的元素
    const result = [];
    // 遍历 arr
    for (let i = 0; i < arr.length; i++) {
        // 判断当前元素是否存在于 args 数组中
        if (args.includes(arr[i])) {
            // 将当前元素的值存入到 result 中
            result.push(arr[i]);
            // 删除当前的元素
            arr.splice(i, 1);
            // 下标自减
            i--;
        }
    }
    // 返回
    return result;
}



function pullAll(arr1, values) {
    return pull(arr1, ...values);
}