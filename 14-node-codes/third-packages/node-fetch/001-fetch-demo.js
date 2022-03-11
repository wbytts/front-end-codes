const fetch = require('node-fetch');

const body = { a: 1 };
fetch('https://httpbin.org/post', {
  method: 'post',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' },
})
  .then(res => res.json())
  .then(json => console.log(json));
