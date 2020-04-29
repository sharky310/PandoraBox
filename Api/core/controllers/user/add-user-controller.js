'use strict';

const user = require('../../database/models/User');
const logger = require('../../utils/logger');

/**
 * @api {post} /api/profile/create PostUser
 * @apiName AddUserController
 * @apiGroup User
 */
async function addUser(req, res, next){

    const {userName, firstName, lastName, email, idUserType} = {...req.body};
    const createDate = new Date();
    const active = false;

    try {
        const newUser = await user.create({
                                        userName,
                                        firstName,
                                        lastName,
                                        email,
                                        idUserType,
                                        createDate,
                                        active
                                    });

        if (newUser) {
            logger.info('addUser : Request OK');
            logger.info(`>New user added with ${userName}`);
            res.status(201).json(`New user added: ${userName}`); 
        } else {
            logger.info('paaddUserUser : Request USER NOT ADDED');
            res.status(400).json('Error user not created'); 
        }
    } catch (ex) {
        logger.error('addUser : Request USER NOT ADDED');
        res.status(404).json('Error user not added'); 
    }
}

module.exports = addUser;