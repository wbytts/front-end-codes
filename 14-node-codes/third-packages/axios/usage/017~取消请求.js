const axios = require('axios');

// 使用 cancel token 取消一个请求
// 可以使用 CancelToken.source 工厂方法创建一个 cancel token

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios
  .get('/user/12345', {
    cancelToken: source.token,
  })
  .catch(function (thrown) {
    if (axios.isCancel(thrown)) {
      console.log('Request canceled', thrown.message);
    } else {
      // 处理错误
    }
  });

axios.post(
  '/user/12345',
  {
    name: 'new name',
  },
  {
    cancelToken: source.token,
  }
);

// 取消请求（message 参数是可选的）
source.cancel('Operation canceled by the user.');

// 也可以通过传递一个 executor 函数到 CancelToken 的构造函数来创建一个 cancel token
/*
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // executor 函数接收一个 cancel 函数作为参数
    cancel = c;
  })
});

// 取消请求
cancel();
*/
