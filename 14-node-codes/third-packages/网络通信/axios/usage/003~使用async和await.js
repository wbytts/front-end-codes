const axios = require('axios');

// 支持async/await用法
async function getUser() {
  try {
    const response = await axios.get('http://www.httpbin.org/get?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getUser();
