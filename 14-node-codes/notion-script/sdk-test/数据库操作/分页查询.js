const { Client, LogLevel } = require('@notionhq/client');

const notion = new Client({
  auth: 'secret_73m9zLMIECUxfIBQxriXRUuDVIiQ7EdxxwqPulOdDmr',
  logLevel: LogLevel.DEBUG,
  timeoutMs: 6000,
});

(async () => {
  const databaseId = '644d782bf49a47f28379ece1af463c47'
  const response = await notion.databases.query({
    database_id: databaseId,
    // start_cursor: '', // 默认是undefined。从上一个响应返回的游标，用于请求下一页的结果。将其视为一个不透明的值。
    page_size: 5, // 分页参数，默认100，最大100
  });
  console.log(response);
})();

/*
返回的信息：
    has_more：是否还有更多页
    next_cursor：下一个游标
    results：结果集
    object：字符串值，如果是分页查的话，类型是 list
 */
