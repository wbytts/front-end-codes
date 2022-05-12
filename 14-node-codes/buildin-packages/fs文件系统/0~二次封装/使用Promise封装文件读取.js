const fs = require('fs');

function getFileContent(path, config = { encoding: 'utf8' }) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, config, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

// getFileContent('f:/temp/posts.json').then(
//   value => console.log(value),
//   err => console.log('出错了', err)
// )

getFileContent('f:/temp/posts.json')
  .then(value => console.log(value))
  .catch(err => console.log(err));
