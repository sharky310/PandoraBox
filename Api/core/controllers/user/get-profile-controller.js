'use strict';

const user = require('../../database/models/User');
const logger = require('../../../core/utils/logger');

/**
 * @api {get} /api/profile GetUserProfile
 * @apiName GetUserProfile
 * @apiGroup User
 * @apiParam {String} email
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
            logger.info('getListUser : Request OK');
            res.status(200).json(userData);
        } else { 
            logger.info('getListUser : Request EMPTY LIST');
            res.status(404).json('No existen usuarios'); 
        }
    } catch (error) {
        logger.info('getListUser : Request ERROR');
        res.status(404).json(error);
    }

}

module.exports = getUserProfile;