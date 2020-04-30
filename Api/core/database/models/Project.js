'use strict';

const Sequelize = require('sequelize');
const {mySqlPool} = require('../mysql-pool');

const project = mySqlPool.define(
    'proyecto',
    {
        idProject: {type: Sequelize.NUMBER, primaryKey: true},
        idOWner:  {type: Sequelize.NUMBER},
        emailProject: {type: Sequelize.TEXT},
        initDate:  {type: Sequelize.DATE},
        addressRepository:     {type: Sequelize.TEXT},
        webProject:{type: Sequelize.TEXT},
        nameProject:{type: Sequelize.TEXT}
    },
    {
        freezeTableName : true,
        timestamps: false
    }
);

module.exports = project;