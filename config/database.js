const fs = require('fs');

module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'express_sequelize',
    host: process.env.DB_IP_HOST,
    dialect: 'mysql'
  }
};