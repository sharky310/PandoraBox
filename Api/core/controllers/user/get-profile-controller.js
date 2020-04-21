'use strict'

const user = require('../../database/models/User');

/**
 * 
 * @param {*} req 
 * @param {*} res - Devuelve la ficha de un usuario según su email
 * @param {*} next 
 */
async function getUserProfile(req, res, next){

    const email = req.query.email;

    try{
        const userData = await user.findOne({
            where:{
                email: email,
            }   
        });
        
        if (userData != null) {
            res.status(200).json(userData);
        } else { res.status(404).json('No existen usuarios'); }
    } catch (error) {
        res.status(404).json(
            error);
    }

}

module.exports = getUserProfile;