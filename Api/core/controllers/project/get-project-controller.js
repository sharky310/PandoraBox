'use strict';

const project = require('../../database/models/Project');
const logger = require('../../../core/utils/logger');

/**
 * @api {get} /api/project GetProject
 * @apiName GetProject
 * @apiGroup Project
 */
async function getProject(req, res, next){

    try{
        const projectData = await project.findAll();
        
        if (projectData != null) {
            logger.info('getProject : Request OK');
            res.status(200).json(projectData);
        } else { 
            logger.info('getProject : Request EMPTY LIST');
            res.status(404).json('No existen usuarios'); 
        }
    } catch (error) {
        logger.info('getProject : Request ERROR');
        res.status(404).json(error);
    }
}

module.exports = getProject;