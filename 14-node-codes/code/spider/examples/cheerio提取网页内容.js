var cheerio = require('cheerio');

// 通过 load 方法把 HTML 代码转换成一个 jQuery 对象
var $ = cheerio.load('<h2 class="title">Hello world</h2>');

// 可以使用与 jQuery 一样的语法来操作
$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

console.log($.html());
// 将输出 <h2 class="title welcome">Hello there!</h2>
