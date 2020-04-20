'use strict'

const Sequelize = require('sequelize') ;

const mySqlPool = new Sequelize(
    // process.env.MYSQL_DATABASE,
    'pandorabox',
    // process.env.MYSQL_USER,
    'root',
    // process.env.MYSQLL_PASSWORD,
    '',
    {
        // host: process.env.MYSQL_HOST,
        host: '',
        // dialect: process.env.DIALECT,
        dialect: '',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
      logging: false, //This property hide message for terminal
    }
)

module.exports = {
    mySqlPool,
};