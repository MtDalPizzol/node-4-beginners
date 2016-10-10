const express = require('express');
const controller = require('./home-controller');

var router = module.exports = express.Router();

router.get('/', controller.dashboard);
