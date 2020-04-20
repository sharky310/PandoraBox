'use strict';

const Sequelize = require('sequelize');
const {mySqlPool} = require('../mysql-pool');

const user = mySqlPool.define(
    'usuario',
    {
        idUsuario: {type: Sequelize.NUMBER, primaryKey: true},
        userName:  {type: Sequelize.TEXT},
        firstName: {type: Sequelize.TEXT},
        lastName:  {type: Sequelize.TEXT},
        email:     {type: Sequelize.TEXT},
        idUserType:{type: Sequelize.NUMBER}
    },
    {
        freezeTableName : true,
        timestamps: false
    }
);

module.exports = user;