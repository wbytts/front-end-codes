const axios = require('axios')

axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.post('http://127.0.0.1:5000/user/', {
//   username: '田七',
//   password: 'awsedasdasd',
//   email: 'zl@qq.com'
// }).then(res => {
//   console.log('返回結果:', res.data);
// }).catch(err => {
//   console.log('錯誤', err);
// })

axios.delete('http://127.0.0.1:5000/user/3').then(res => {
  console.log('返回結果:', res.data);
}).catch(err => {
  console.log('錯誤', err);
})


