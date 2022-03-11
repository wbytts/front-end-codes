const { get_qq_notion_client } = require('../utils/notion-utils.js');
const dbs = require('../../qq-notion-database-map.js');

const notion = get_qq_notion_client();

(async () => {
  const response = await notion.databases.list();
  console.log(response);
})();
