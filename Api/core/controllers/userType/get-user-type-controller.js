'use strict';

const userType = require('../../database/models/UserType');
const logger = require('../../../core/utils/logger');

/**
 * @api {get} /api/userType GetUserTypes
 * @apiName GetUserTypes
 * @apiGroup GetUserTypes
 */
async function getUserTypes(req, res, next){

    try{
        const userTypeData = await userType.findAll();
        
        if (userTypeData != null) {
            logger.info('getUserTypes : Request OK');
            res.status(200).json(userTypeData);
        } else { 
            logger.info('getUserTypes : Request EMPTY LIST');
            res.status(404).json('No existen usuarios'); 
        }
    } catch (error) {
        logger.info('getUserTypes : Request ERROR');
        res.status(404).json(error);
        
    }
}

module.exports = getUserTypes;