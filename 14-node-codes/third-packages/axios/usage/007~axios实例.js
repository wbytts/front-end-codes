const axios = require('axios');

/*
  可以使用自定义配置新建一个实例 axios.create(config)
  可用的实例方法：
      axios#request(config)
      axios#get(url[, config])
      axios#delete(url[, config])
      axios#head(url[, config])
      axios#options(url[, config])
      axios#post(url[, data[, config]])
      axios#put(url[, data[, config]])
      axios#patch(url[, data[, config]])
      axios#getUri([config])
*/

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
