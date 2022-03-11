/*
 * @Descripttion: 
 * @version: 
 * @Author: EayCome
 * @Date: 2021-02-10 14:44:47
 * @LastEditors: EayCome
 * @LastEditTime: 2021-02-10 14:55:19
 */


function reverseString(str) {
    // 将字符串转化为
    // let arr = str.split('');
    let arr = [...str]
        // 翻转数组
    arr.reverse();
    let result = arr.join('');
    return result;
}

function palindrome(str) {
    return reverseString(str) === str;
}

function truncate(str, size) {
    return str.slice(0, size) + '...';
}