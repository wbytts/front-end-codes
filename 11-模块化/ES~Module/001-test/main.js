// 分别导出的要用 {xxx} 进行导入
import { sum, moduleName } from './by-util.js';
// 导入模块的 default导出
import $by from './by-util.js';

console.log('hello');
console.log(sum(3, 4));
console.log(moduleName);
