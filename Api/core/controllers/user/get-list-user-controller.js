'use strict'

const user = require('../../database/models/User');

/**
 * 
 * @param {*} req 
 * @param {*} res - Devuelve el listado de usuarios registrado. En caso de no existir devolvera un error.
 * @param {*} next 
 */
async function getListUser(req, res, next){
    let listData = null;

    try{
        listData = await user.findAll();
        if (listData != null){ res.status(200).json(listData); }
            else { res.status(404).json('No existen usuarios'); }
    } catch (error) {
        res.status(404).json(error);
    }
}

module.exports = getListUser;