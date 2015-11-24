"use strict";
var express = require('express');
var router = express.Router();
var testModel = require('../model/test');

router.use(function (req, res, next) {
    console.log('now step into list module!');
    next();
});

router.route('/').get(function (req, res) {

    testModel.find(function (err, docs) {
        if (err) {
            console.log(err);
        }
        console.log(docs.length);
        if (docs.length === 0) {

        } else {
            res.render('list', {
                title: '用户列表页',
                header: '用户列表',
                userList: docs
            });
        }
    });

}).post(function (req, res) {
    var userInfo = req.body;

});

module.exports = router;