const axios = require('axios');

// 使用 validateStatus 配置选项，可以自定义抛出错误的 HTTP code
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // 处理状态码小于500的情况
  },
});
