"use strict";
var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    let arr = [1, 4, 5];
    console.log('now step into login module!');
    arr.forEach(function (value, index, array) {
        console.log(value);
    });
    console.log(arr.map(function (value, index, array) {
        return value + 1;
    }));
    console.log(arr.filter(function (value, index, array) {
        return value > 1;
    }));
    console.log(arr.indexOf(8));
    console.log(arr.indexOf(4));
    next();
});

router.route('/test').get(function (req, res) {
    "use strict";
    res.send('hello man! welcome to the world of nodejs!');
});

module.exports = router;