'use strict';

const Sequelize = require('sequelize');
const {mySqlPool} = require('../mysql-pool');

const userType = mySqlPool.define(
    'tipousuario',
    {
        idTipoUsuario: {type: Sequelize.NUMBER, primaryKey: true},
        nameType:  {type: Sequelize.TEXT},
        descriptionType: {type: Sequelize.TEXT}
    },
    {
        freezeTableName : true,
        timestamps: false
    }
);

module.exports = userType;