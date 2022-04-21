const axios = require('axios');

// 自定义 axios 实例
const instance = axios.create();

// 添加拦截器
instance.interceptors.request.use(function () {
  /*...*/
});
