const axios = require('axios');

// 发起一个 GET 请求 (默认请求方式)
axios('/user/12345');

// 在 node.js 用GET请求获取远程图片
axios({
  method: 'get',
  url: 'http://www.httpbin.org/get',
  responseType: 'stream',
}).then(function (response) {
  response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'));
});

// 发起一个post请求
axios({
  method: 'post',
  url: 'http://www.httpbin.org/post',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone',
  },
});

/*
  请求方式别名：在使用别名方法时， url、method、data 这些属性都不必在配置中指定
    axios.request(config)
    axios.get(url[, config])
    axios.delete(url[, config])
    axios.head(url[, config])
    axios.options(url[, config])
    axios.post(url[, data[, config]])
    axios.put(url[, data[, config]])
    axios.patch(url[, data[, config]])
*/
