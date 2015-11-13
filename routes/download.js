var fs = require('fs');
var express = require('express');
var router = express.Router();
var createExcel = require('../model/create_excel');

router.use(function (req, res, next) {
    console.log('step into module download!');
    next();
});

router.route('/').get(function (req, res) {
    var tplUri = './statics/tpl_ejsexcel/abc.xlsx';
    var data = [
                [
                    "test Excel"
                ],
                [
                    {"name":"dfe","date":"11111","username":"erefefe","password":"2013-12-07", "address":"fefedv"},
                    {"name":"dfe2","date":"11111","username":"erefefe","password":"2013-12-07", "address":"fefedv"},
                    {"name":"dfe3","date":"11111","username":"erefefe","password":"2013-12-07", "address":"fefedv"},
                    {"name":"dfe4","date":"11111","username":"erefefe","password":"2013-12-07", "address":"fefedv"},
                    {"name":"dfe5","date":"11111","username":"erefefe","password":"2013-12-07", "address":"fefedv"},
                    {"name":"dfe6","date":"11111","username":"erefefe","password":"2013-12-07", "address":"fefedv"},
                    {"name":"dfe7","date":"11111","username":"erefefe","password":"2013-12-07", "address":"fefedv"}
                ]
        ];

    createExcel(tplUri, data, '', function (destUri) {
        res.download(destUri, 'hahah.xlsx', function (temp) {
            console.log(temp);
        });
    });
});

module.exports = router;