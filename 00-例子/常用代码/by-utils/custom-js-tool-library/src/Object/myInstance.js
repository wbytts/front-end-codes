/*
 * @Descripttion: 
 * @version: 
 * @Author: EayCome
 * @Date: 2021-02-10 11:31:04
 * @LastEditors: EayCome
 * @LastEditTime: 2021-02-10 11:34:58
 */

function myInstance(obj, Fn) {
    // 获取函数的显式原型对象
    let prototype = Fn.prototype;
    // 获取 obj 的隐式原型对象
    let proto = obj.__proto__;
    // 遍历原型链
    while (proto) {
        // 检测原型对象是否相等
        if (prototype === proto) {
            return true;
        }
        // 如果不等于
        proto = proto.__proto__;
    }
    return false;
}