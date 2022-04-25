const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelize', 'root', 'Yang@2008', {
  host: '47.106.203.81',
  port: 3306,
  dialect: 'mysql',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();



