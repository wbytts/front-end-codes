const { Sequelize } = require('sequelize');

// 方法 1: 传递一个连接 URI
// const sequelize = new Sequelize('sqlite::memory:'); // Sqlite 示例
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname'); // Postgres 示例

// 方法 2: 分别传递参数 (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sqlite',
});

// 方法 3: 分别传递参数 (其它数据库)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
// });



