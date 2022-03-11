const fs = require('fs');

fs.mkdir('f:/temp/test_mkdir', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('创建成功');
})
