"use strict";
var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    console.log('now step into login module!');
    next();
});

module.exports = router;