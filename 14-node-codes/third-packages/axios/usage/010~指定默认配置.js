const axios = require('axios');

// 全局 axios 默认值
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 自定义实例的默认值
// 创建实例时配置默认值
const instance1 = axios.create({
  baseURL: 'https://api.example.com',
});

// 创建实例后修改默认值
instance1.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// 配置将会按优先级进行合并。
// 它的顺序是：在lib/defaults.js中找到的库默认值，然后是实例的 defaults 属性，最后是请求的 config 参数。后
// 面的优先级要高于前面的。
// 配置的优先级
// 使用库提供的默认配置创建实例
// 此时超时配置的默认值是 `0`
const instance2 = axios.create();

// 重写库的超时默认值
// 现在，所有使用此实例的请求都将等待2.5秒，然后才会超时
instance2.defaults.timeout = 2500;

// 重写此请求的超时时间，因为该请求需要很长时间
instance2.get('/longRequest', {
  timeout: 5000,
});
