'use strict'

const express = require('express');
const getUserProfile = require('../controllers/user/get-profile-controller');
const getListUser = require('../controllers/user/get-list-user-controller');
const getActiveUsers = require('../controllers/user/get-active-users-controller');

const router = express.Router();

router.get('/profile', getUserProfile);
router.get('/profile/list', getListUser);
router.get('/profile/active',getActiveUsers);

module.exports = router;