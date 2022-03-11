const nu = require('../utils/notion-utils');
// 加载环境变量
require('dotenv').config({ path: '../.env' });
// 初始化notion客户端
nu.init_notion_client(process.env.QQ_TOKEN);

(async () => {
  // 检索一个页面，返回页面的信息
  let res = await nu.retrieve_page('89db9ecc31c54c50a254b9168b34f948');
  console.log(res);
})();
