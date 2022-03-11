const axios = require('axios');
// const axios = require('axios').default;
// axios.<method> 能够提供自动完成和参数类型推断功能

/*
  axios 是一个基于 Promise 的网络请求库，可以用于 nodejs 和 浏览器中
  在服务端它使用原生 node.js 的 http 模块
  在客户端 (浏览端) 则使用 XMLHttpRequests
 */

// 测试基本get请求发送，单独请求一个URL
axios
  .get('http://www.httpbin.org/get')
  .then(res => {
    // 处理请求的结果
    console.log(res.data);
  })
  .catch(reason => {
    // 处理异常的情况
    console.log(reason);
  })
  .then(function () {
    // 在catch之后的then总是会执行
  });
