// npm install axios --save
const axios = require('axios');
// npm install cheerio --save
const cheerio = require('cheerio');
const fs = require('fs');

let posts = [];

/**
 * 解析url获取文章链接
 * @param url 按日期分类的url之一
 * @returns {Promise<void>}
 */
async function findLink(url) {
  let res = await axios.get(url);
  const $ = cheerio.load(res.data);
  $('a').each((index, element) => {
    let href = element.attribs.href;
    let title = $(element).text();
    if (href.startsWith(url)) {
      console.log(title, href);
      posts.push({ title, href });
    }
  });
}

// 爬取阮一峰的网络日志，从2003年12月到最新时间的所有文章列表
(async () => {
  let now = new Date();
  for (let year = 2003; year <= parseInt(now.getFullYear()); year++) {
    for (let month = 1; month <= 12; month++) {
      let url = `https://www.ruanyifeng.com/blog/${year}/${month < 10 ? '0' + month : month}/`;
      try {
        await findLink(url);
      } catch (error) {
        console.log(`未获取到${year}年${month}月的日志...`);
      }
    }
  }
  console.log(posts);
  let postsJsonStr = JSON.stringify(posts);
  // 保存爬取结果
  fs.writeFileSync('./posts.json', postsJsonStr);
  // 生成预览页面
  let aHtml = '';
  posts.forEach(post => {
    aHtml += `<a href="${post.href}">${post.title}</a><br/>\n`;
  });
  let postsHtml = `
    <!DOCTYPE html>
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </head>
      <body>${aHtml}</body>
    </html>
  `;
  fs.writeFileSync('./posts.html', postsHtml);
})();
