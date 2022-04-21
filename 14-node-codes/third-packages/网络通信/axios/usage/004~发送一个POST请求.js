const axios = require('axios');

// axios.post(url, data)
axios
  .post('http://www.httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flintstone',
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
