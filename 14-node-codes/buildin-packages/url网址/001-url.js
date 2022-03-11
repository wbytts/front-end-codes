const url = require('url');
// url 模块，解析URL
/*
  url.parse() 解析URL，第二个参数为 true 时，会将query解析为对象（默认为false）
  url.format(url_obj) 将解析结果还原为URL字符串，url.parse()的逆操作
  url.resolve(from, to) 添加或者替换地址

*/

var s = 'http://www.baidu.com?name=wby&age=20';
var result = url.parse(s, true);
console.log(result);
