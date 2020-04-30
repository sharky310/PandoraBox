'use strict';

const express = require('express');
const getProject = require('../controllers/project/get-project-controller');

const router = express.Router();

router.get('/project', getProject);

module.exports = router;