const axios = require('axios');

axios
  .get('http://www.baidu.com')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });
