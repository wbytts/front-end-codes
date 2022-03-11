const { create_simple_page } = require('./notion-fetch-api.js');
const { create_simple_text } = require('./notion-sdk-utils.js');

const test_database_id = '644d782bf49a47f28379ece1af463c47';

(async () => {
  let res = await create_simple_page(test_database_id, {
    Name: {
      title: create_simple_text('test-page'),
    },
    备注: {
      rich_text: create_simple_text('test-page'),
    },
  });
  console.log(res);
})();
