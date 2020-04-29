'use strict';

const user = require('../../database/models/User');
const logger = require('../../utils/logger');

/**
 * @api {put} /api/profile/modify PutUserProfile
 * @apiName ModifyUserProfileController
 * @apiGroup User
 */
async function modifyUserProfile(req, res, next){
    const {userName, firstName, lastName, email, idUserType, password, active} = {...req.body};

    try{
        await user.update({ 
            userName,
            firstName,
            lastName,
            email,
            idUserType,
            password,
            active
        },
        { 
            where: {
                email: email
            }
        })
        
        logger.info('modifyUserProfile : Request OK');
        logger.info(`>User with mail: ${email} modify`);
        res.status(200).json(`User with mail: ${email} modify`);
    } catch(eX){
        logger.error('modifyUserProfile : Request USER NOT MODIFY');
        res.status(304).json('Error user not modified'); 
    }
}

module.exports = modifyUserProfile;