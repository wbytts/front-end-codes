const axios = require('axios');

// 默认情况下，axios将 JavaScript 对象序列化为 JSON 。
// 要以application/x-www-form-urlencoded格式发送数据，您可以使用以下选项之一。

// 在浏览器中，可以使用URLSearchParams API
// 请注意，不是所有的浏览器(参见 caniuse.com)都支持 URLSearchParams ，但是可以使用polyfill (确保 polyfill 全局环境)
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);

// 或者, 您可以使用qs 库编码数据
const qs = require('qs');
axios.post('/foo', qs.stringify({ bar: 123 }));

// 或者（ES6）
import qs from 'qs';
const data = { bar: 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);
