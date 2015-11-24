var express = require('express');
var router = express.Router();
var testModel = require('../model/test');
var fs = require('fs');

router.route('/').get(function(req, res) {

    fs.readFile('./temp/gulpfile.js', function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data);
        res.render('index', {
            title: '首页',
            header: '欢迎进入nodejs的世界，狗！',
            data: data
        });
    });

}).post(function (req, res) {
    var writeStream = fs.createWriteStream('./temp/gulpfile.js');
    var chunkArr = [];

    writeStream.end(req.body.data);
    writeStream.on('finish', function () {
        res.json({
            data: 'ok'
        });
    });

    //req.on('data', function (chunk) {
    //    chunkArr.push(chunk);
    //});
    //
    //req.on('end', function (chunk) {
    //    var buf = Buffer.concat(chunkArr);
    //    writeStream.end(buf, function (err, data) {
    //        if (err) {
    //            console.log(err);
    //        }
    //        console.log(data);
    //        res.json({
    //            data: 'ok'
    //        });
    //    });
    //});
});

module.exports = router;
