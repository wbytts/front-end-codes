/*
 * @Descripttion: 
 * @version: 
 * @Author: EayCome
 * @Date: 2021-02-10 11:39:46
 * @LastEditors: EayCome
 * @LastEditTime: 2021-02-10 11:50:52
 */

function mergeObject(...objs) {
    // 声明一个空对象
    const result = {};
    // 遍历所有的参数对象
    objs.forEach(obj => {
        // 获取当前对象所有属性
        Object.keys(obj).forEach(key => {
            // 检测 result 是否存在key属性
            if (result.hasOwnProperty(key)) {
                result[key] = [].concat(result[key], obj[key]);
            } else {
                // 如果没有直接写入
                result[key] = obj[key];
            }
        })
    })
    return result;
}