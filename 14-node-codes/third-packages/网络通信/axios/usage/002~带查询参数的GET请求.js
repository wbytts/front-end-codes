const axios = require('axios');

// axios.get(url, config);
axios
  .get('http://www.httpbin.org/get', {
    // 请求一个URL，并且带上URL的查询参数
    params: { name: 'wby' },
  })
  .then(res => {
    console.log(res.data);
  });
