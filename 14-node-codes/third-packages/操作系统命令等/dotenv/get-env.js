const dotenv = require('dotenv');

// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
dotenv.config({ path: '.env' });

// 使用 dotenv 可以让我们免于在各个文件中引入配置文件，也可以很好的解决敏感信息的泄漏，利于后期代码维护
console.log(process.env.TEST_X);
