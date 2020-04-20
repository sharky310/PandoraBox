'use strict'

const user = require('../../database/models/User');

async function getListUser(req, res, next){

    let listData = null;

    try{
        listData = await user.findAll();
        res.status(200).json(listData);
    } catch (error) {
        res.status(404).json("Vai mal: "+error);
    }

}

module.exports = getListUser;