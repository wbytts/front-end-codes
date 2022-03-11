const { Client } = require('@notionhq/client');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const notion = new Client({ auth: process.env.QQ_TOKEN });

(async () => {
  const databaseId = '644d782bf49a47f28379ece1af463c47';
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  console.log(response.results.map(r => r.properties));
})();
