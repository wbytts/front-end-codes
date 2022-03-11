// 导出一个函数
export function sum(a, b) {
  return a + b;
}

export const moduleName = 'by-util';

let ByUtil = {};

ByUtil.getE = function (selector) {
  return document.querySelector(selector);
};

ByUtil.getEs = function (selector) {
  return document.querySelectorAll(selector);
};

export default ByUtil;
