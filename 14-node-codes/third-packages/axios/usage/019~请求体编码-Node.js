const axios = require('axios');

// 使用 querystring 模块
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));

// 或者从'url module'中使用'URLSearchParams'
// 也可以使用 qs 库
// 注：如果需要对嵌套对象进行字符串化处理，则最好使用 qs 库，因为 querystring 方法在该用例中存在已知问题(https://github.com/nodejs/node-v0.x-archive/issues/1665)。
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());

// 在 node.js, 您可以使用 form-data 库
const FormData = require('form-data');

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() });

// 或者, 使用一个拦截器:
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
