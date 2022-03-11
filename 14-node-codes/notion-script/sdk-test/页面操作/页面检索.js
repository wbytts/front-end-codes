const { get_qq_notion_client } = require('../utils/notion-utils.js');
const notion = get_qq_notion_client();

const pages = require('../../qq-notion-page-map');

(async () => {
  const response = await notion.pages.retrieve({ page_id: pages['test-page-001'] });
  console.log(response);
})();
