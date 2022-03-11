var request = require('request');
var cheerio = require('cheerio');

const url = 'http://www.maomijiaoyi.com/';

request(url, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    var $ = cheerio.load(body);
    $('img').each((index, element) => {
      console.log(element.attribs.src);
    });
  }
});
