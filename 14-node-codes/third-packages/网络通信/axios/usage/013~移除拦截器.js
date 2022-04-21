const axios = require('axios');

// 如果你稍后需要移除拦截器，可以这样：
const myInterceptor = axios.interceptors.request.use(function () {
  /*...*/
});
axios.interceptors.request.eject(myInterceptor);
