const fetch = require('node-fetch');

fetch('http://172.20.21.49:8003/zb-public/project/queryCompanyProjectPage', {
  headers: {
    accept: 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6',
    'content-type': 'application/json;charset=UTF-8',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    tokenid: 'zb_public:c46e49b7-57ed-4f35-872c-5aea7d1db878',
    'x-requested-with': 'XMLHttpRequest',
    cookie: 'JSESSIONID=zb_public:c46e49b7-57ed-4f35-872c-5aea7d1db878; Webstorm-23fed1c5=58b893e0-a985-42d0-87ef-1b86ae564ab3',
    Referer: 'http://localhost:8080/project/projectFillIn?keepAlive=false',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  },
  body: JSON.stringify({ nowPage: 1, pageSize: 10, queryType: 1 }),
  method: 'POST',
})
  .then(res => res.json())
  .then(data => {
    console.log(data.data.rootArray);
  });










