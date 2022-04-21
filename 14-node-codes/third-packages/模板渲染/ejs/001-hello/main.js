const ejs = require('ejs');
const fs = require('fs');

let data = {
  msg: '你好啊123'
};

ejs.renderFile('./index.ejs', data, (err, data) => {
  fs.writeFileSync('./index.html', data);
});



