const axios = require('axios');

axios.get('/user/12345').catch(function (error) {
  if (error.response) {
    // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // 请求已经成功发起，但没有收到响应
    // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
    // 而在node.js中是 http.ClientRequest 的实例
    console.log(error.request);
  } else {
    // 发送请求时出了点问题
    console.log('Error', error.message);
  }
  console.log(error.config);
  // 使用 error.toJSON() 可以获取更多关于HTTP错误的信息
  console.log(error.toJSON());
});
