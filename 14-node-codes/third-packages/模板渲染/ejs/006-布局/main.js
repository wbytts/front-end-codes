const ejs = require('ejs');
const fs = require('fs');

let data = {

};

ejs.renderFile('./index.ejs', data, (err, data) => {
  fs.writeFileSync('./index.html', data);
});



