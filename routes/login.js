"use strict";
var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var testModel = require('../model/test');

router.use(function (req, res, next) {
    console.log('now step into login module!');
    next();
});

router.route('/').get(function (req, res) {

    res.render('login', {
        title: '登录页',
        header: '请填写相关信息'
    });

}).post(function (req, res) {
    var userInfo = req.body;
    var pro = new Promise(function (resolve, reject) {
        testModel.find({username: userInfo.username}, function (err, docs) {
            if (err) {
                console.log(err);
            }
            if (docs.length) {
                reject('has reg');
            } else {
                userInfo.password = crypto.createHash('md5').update(userInfo.password).digest('hex');
                resolve(userInfo);
            }
        });
    });

    pro.then(function (val) {
        console.log(val);
        testModel.create(val, function (err, docs) {
            if (err) {
                console.log(err);
            }
        });
        return 'hhahaha';
    }, function (val) {
        res.send(val);
    }).then(function (val) {
        res.send(val);
    });

});


module.exports = router;