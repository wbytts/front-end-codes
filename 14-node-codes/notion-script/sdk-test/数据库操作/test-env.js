const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: '../.env' });

console.log(process.env.QQ_TOKEN);
