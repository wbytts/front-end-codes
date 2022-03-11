const { get_qq_notion_client } = require('../utils/notion-utils.js');
const dbs = require('../../qq-notion-database-map.js');

const notion = get_qq_notion_client();

(async () => {
  // 查询的是这个数据库本身的信息
  const response = await notion.databases.retrieve({ database_id: dbs['test-database'] });
  console.log(response);
})();
