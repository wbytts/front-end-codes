var request = require('request');
var cheerio = require('cheerio');

// 通过 GET 请求来读取 http://cnodejs.org/ 的内容
request('http://cnodejs.org/', function (error, response, body) {
  if (!error && response.statusCode === 200) {
    // 输出网页内容
    // console.log(body);
    var $ = cheerio.load(body);
    var res = $('title').text();
    console.log(res);
  }
});
