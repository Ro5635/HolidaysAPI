/**
 * Version Router
 *
 *
 */
'use strict';

const express = require('express');
const router = express.Router();
const appPackage = require('../package');

router.get('/', function(req, res) {
    res.send({version : appPackage.version});

});

module.exports = router;