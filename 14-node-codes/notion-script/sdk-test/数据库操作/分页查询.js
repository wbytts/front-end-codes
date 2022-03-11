const { get_qq_notion_client } = require('../utils/notion-utils.js');
const dbs = require('../../qq-notion-database-map.js');

const notion = get_qq_notion_client();

(async () => {
  const response = await notion.databases.query({
    database_id: dbs['test-database'],
    // start_cursor: '', // 默认是undefined。从上一个响应返回的游标，用于请求下一页的结果。将其视为一个不透明的值。
    page_size: 5, // 分页参数，默认100，最大100
  });
  console.log(response.results.map(r => r));
})();

/*
返回的信息：
    has_more：是否还有更多页
    next_cursor：下一个游标
    results：结果集
    object：字符串值，如果是分页查的话，类型是 list
 */
