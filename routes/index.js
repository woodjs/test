var express = require('express');
var router = express.Router();
var testModel = require('../model/test');

router.route('/').get(function(req, res) {
    //var doc = {
    //  username: 'yyl',
    //  password: 123789,
    //  title: 'first title',
    //  content: 'first content'
    //};
    //testModel.create(doc, function (err){
    //  if (err) {
    //    console.log('save error!');
    //  }
    //  console.log('save sucess');
    //  res.json({
    //      'yyl': '123789'
    //  });
    //});
    res.render('index', {title: '请填写相关信息！'});
}).post(function (req, res) {
    var doc = req.body;
    testModel.create(doc, function (err) {
        if (err) {
            res.send('数据未成功存入数据库！');
        }
        res.send('数据已成功存入数据库！');
    });
});

module.exports = router;
