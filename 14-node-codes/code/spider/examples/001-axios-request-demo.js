const axios = require('axios');
const cheerio = require('cheerio');

const url = 'http://www.baidu.com';

axios.get(url).then(res => {
    const $ = cheerio.load(res.data);
    $('img').each((index, element) => {
        console.log(element.attribs.src);
    });
});
