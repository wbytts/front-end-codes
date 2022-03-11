const { Client, LogLevel } = require('@notionhq/client');

let client = null;

/**
 * 初始化notion客户端
 * @param token
 * @returns {Client}
 */
function init_notion_client(token) {
  client = new Client({ auth: token, logLevel: LogLevel.DEBUG });
  return client;
}

/**
 * 检索一个页面
 * @param page_id
 * @returns {Promise<unknown>}
 */
function retrieve_page(page_id) {
  return new Promise(async (resolve, reject) => {
    const response = await client.pages.retrieve({ page_id });
    resolve(response);
  });
}

/**
 * 创建一个页面
 * @param parent_type 父类型
 * @param parent_id 父id
 * @param config 其他选项
 * @returns {Promise<unknown>}
 */
function create_page(parent_type, parent_id, config = {}) {
  return new Promise(async (resolve, reject) => {
    // let parent = {};
    // if (parent_type === 'database') {
    //   parent.type = 'database_id';
    //   parent.database_id = parent_id;
    // } else if (parent_type === 'page') {
    //   parent.type = 'page_id';
    //   parent.page_id = parent_id;
    // } else if (parent_type === 'workspace') {
    //   parent.type = 'workspace';
    //   parent.workspace = true;
    // }
    client.pages
      .create({
        parent: {
          database_id: parent_id,
        },
      })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        console.log(err);
      });
  });
}

module.exports = {
  init_notion_client,
  retrieve_page,
  create_page,
};
