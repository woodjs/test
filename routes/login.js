"use strict";
var express = require('express');
var router = express.Router();
var testModel = require('../model/test');

router.use(function (req, res, next) {
    console.log('now step into login module!');
    next();
});

router.route('/').get(function (req, res) {
    console.log(req.session);
    res.render('login', {
        title: '登录页',
        header: '请填写相关信息'
    });

}).post(function (req, res) {
    var userInfo = req.body;
    testModel.create(userInfo, function (err) {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    });
});

module.exports = router;