'use strict'

const user = require('../../database/models/User');
const logger = require('../../../core/utils/logger');

/**
 * Devuelve el listado de usuarios. Es posible añadir filtros según lo siguiente
 * ?active = 0,1 - Usuarios activos o no
 */
async function getListUser(req, res, next){
    let listData = null;

    try{
        let active = req.query.active;

        if (req.query.active) {
            listData = await user.findAll({
                where : {
                    active : active,
                }
            });
        } else {
            listData = await user.findAll({});
        }

        if (listData != null){ 
            logger.info('getListUser : Request OK');
            res.status(200).json(listData); 
        }
            else { 
                logger.info('getListUser : Request EMPTY LIST');
                res.status(404).json('No existen usuarios'); 
            }
    } catch (error) {
        logger.error('getListUser : Request ERROR');
        res.status(404).json(error);
    }
}

module.exports = getListUser;