const axios = require('axios');

const notionHttp = axios.create({
  baseURL: 'https://api.notion.com/v1',
  timeout: 3000,
  headers: {
    Authorization: 'Bearer secret_73m9zLMIECUxfIBQxriXRUuDVIiQ7EdxxwqPulOdDmr',
    'Content-Type': 'application/json',
  },
});

// 添加请求拦截器
notionHttp.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
notionHttp.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

module.exports = {
  notionHttp,
};
