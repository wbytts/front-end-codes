/**
 * 获取符合指定选择器的第一个元素
 * @param selector CSS选择器
 * @returns {*} 返回选择器匹配的第一个元素
 */
function getElement(selector) {
  return document.querySelector(selector);
}

/**
 * 获取所有选择器匹配的元素
 * @param selector CSS选择器
 * @returns {NodeListOf<*>} 返回选择器匹配的所有元素
 */
function getElementAll(selector) {
  return document.querySelectorAll(selector);
}
