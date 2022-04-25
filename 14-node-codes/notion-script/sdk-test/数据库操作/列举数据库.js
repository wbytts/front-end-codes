const { Client, LogLevel } = require('@notionhq/client');

const notion = new Client({
  auth: 'secret_73m9zLMIECUxfIBQxriXRUuDVIiQ7EdxxwqPulOdDmr',
  logLevel: LogLevel.DEBUG,
  timeoutMs: 6000,
});


(async () => {
  const response = await notion.databases.list();
  console.log(response);
})();
