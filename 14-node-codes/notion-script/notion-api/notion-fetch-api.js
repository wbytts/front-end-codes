var fetch = require('node-fetch');

const defaultHeaders = {
  // token
  Authorization: 'Bearer secret_73m9zLMIECUxfIBQxriXRUuDVIiQ7EdxxwqPulOdDmr',
  // Notion 版本
  'Notion-Version': '2021-08-16',
  'Content-Type': 'application/json',
};

/**
 * 创建一个简单的 Notion Page
 * @param parent_id 父id
 * @param properties
 * @returns {Promise<unknown>}
 */
exports.create_simple_page = function (parent_id, properties) {
  const url = 'https://api.notion.com/v1/pages';
  let config = {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify({
      parent: {
        database_id: parent_id,
      },
      properties,
    }),
  };
  return new Promise((resolve, reject) => {
    fetch(url, config)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};
