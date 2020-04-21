'use strict'

const user = require('../../database/models/User');

/**
 * 
 * @param {*} req 
 * @param {*} res - Devuelve un listado de usuarios si estan activos
 * @param {*} next 
 */
async function getActiveUsers(req, res, next){

    const email = req.query.email;

    try{
        const listUsers = await user.findOne({
            where:{
                active: true,
            }   
        });
        
        if (listUsers != null) {
            res.status(200).json(listUsers);
        } else { res.status(404).json('No existen usuarios activos'); }
    } catch (error) {
        res.status(404).json(
            error);
    }

}

module.exports = getActiveUsers;