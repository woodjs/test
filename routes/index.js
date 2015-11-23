var express = require('express');
var router = express.Router();
var testModel = require('../model/test');

router.route('/').get(function(req, res) {
    req.session.test = '111111';
    res.render('index', {
        title: '首页',
        header: '欢迎进入nodejs的世界，狗！'
    });

}).post(function (req, res) {

    var temp = req.body;

    console.log(temp);

});

module.exports = router;
