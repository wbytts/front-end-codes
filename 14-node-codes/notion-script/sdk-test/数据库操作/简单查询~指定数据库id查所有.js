const { Client, LogLevel } = require('@notionhq/client');

const notion = new Client({
  auth: 'secret_73m9zLMIECUxfIBQxriXRUuDVIiQ7EdxxwqPulOdDmr',
  logLevel: LogLevel.DEBUG,
  timeoutMs: 6000,
});


(async () => {
  const databaseId = '644d782bf49a47f28379ece1af463c47';
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  console.log(response.results.map(r => r.properties));
})();





