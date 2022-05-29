const cheerio = require('cheerio');

function cheerioProc(htmlText, callback) {
  let $ = cheerio.load(htmlText);
  return callback($);
}

let text = '<h2 class = "title">Hello world</h2>'

cheerioProc(text, $ => {
  $('h2.title').text('Hello there!');
  $('h2').addClass('welcome');
  let html = $.html();
  console.log(html);
});

