const nu = require('../utils/notion-utils');
// 加载环境变量
require('dotenv').config({ path: '../.env' });
// 初始化notion客户端
const client = nu.init_notion_client(process.env.QQ_TOKEN);

(async () => {
  // 检索一个页面，返回页面的信息
  // let res = await nu.create_page('database', '644d782bf49a47f28379ece1af463c47');
  // console.log(res);

  client.pages
    .create({
      parent: {
        database_id: '644d782bf49a47f28379ece1af463c47',
      },
    })
    .then(response => {
      resolve(response);
    })
    .catch(err => {
      console.log(err);
    });
})();
