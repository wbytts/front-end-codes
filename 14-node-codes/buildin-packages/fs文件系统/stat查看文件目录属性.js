const fs = require('fs');

fs.stat('f:/temp/jjy', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('文件?' + data.isFile());
  console.log('目录?' + data.isDirectory());
});
