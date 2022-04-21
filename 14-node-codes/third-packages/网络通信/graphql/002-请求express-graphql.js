const axios = require('axios');

axios({
  method: 'POST', // GraphQL 的请求方法必须是 POST
  url: 'http://127.0.0.1:3000/graphql',
  data: {
    query: '{foo count}',
  },
}).then(res => {
  console.log(res.data);
});






