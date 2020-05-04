'use strict';

const express = require('express');
const  getUserProfile = require('../controllers/user/get-profile-controller');
const  getListUsers = require('../controllers/user/get-list-user-controller');
const  addUser = require('../controllers/user/add-user-controller');
const  modifyUserProfile = require('../controllers/user/modify-modify-user-profile-controller');

const router = express.Router();

router.get('/profile', getUserProfile);
router.get('/profile/list', getListUsers);
router.post('/profile/create', addUser);
router.put('/profile/modify', modifyUserProfile);

module.exports = router;