/*
 * @Descripttion: 
 * @version: 
 * @Author: EayCome
 * @Date: 2021-02-10 17:11:58
 * @LastEditors: EayCome
 * @LastEditTime: 2021-02-10 17:23:33
 */

function addEventListener(el, type, fn, selector) {
    // 判断el的类型
    if (typeof el === 'string') {
        el = document.querySelector(el)
    }
    // 事件绑定
    // 若没有传递子元素的选择器,则给 el 元素绑定事件
    if (!selector) {
        el.addEventListener(type, fn);
    } else {
        el.addEventListener(type, function(e) {
            // 获取点击的事件源
            const target = e.target;
            // 判断选择器与目标元素是否相符合
            // 如果元素被指定的选择器字符串选择，Element.matches()  方法返回true; 否则返回false。
            if (target.matches(selector)) {
                // 若符合 则调用回调
                fn.call(target, e);
            };
        })
    }
}