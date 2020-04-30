'use strict';

const express = require('express');
const getTypes = require('../controllers/userType/get-user-type-controller');

const router = express.Router();

router.get('/userType', getTypes);

module.exports = router;