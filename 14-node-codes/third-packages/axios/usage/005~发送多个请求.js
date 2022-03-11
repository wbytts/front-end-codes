const axios = require('axios');

function getUserAccount() {
  return axios.get('http://www.httpbin.org/get');
}

function getUserPermissions() {
  return axios.get('http://www.httpbin.org/get');
}

Promise.all([getUserAccount(), getUserPermissions()]).then(function (results) {
  console.log('1:', results[0]);
  console.log('2:', results[1]);
});
