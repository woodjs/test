"use strict";
var fs = require('fs');
var ejsExcel = require('ejsexcel');

function createExcel(tplUri, data, destUri, callback) {
    fs.readFile(tplUri, function (err, exlBuf) {
        if (err) {
            console.log('error, when open template of excel !');
            return;
        }
        ejsExcel.renderExcelCb(exlBuf, data, function(exlBuf){
            var target = destUri || './temp/temp.xlsx';
            //fs.writeFile(target, exlBuf, function (err) {
            //    if (err) {
            //        console.log('error, when write data into excel !');
            //        return;
            //    }
            //    callback && callback(target);
            //});
            var doc = fs.createWriteStream(target);
            doc.end(exlBuf, function (err) {
                if (err) {
                    console.log('error, when write data into excel !');
                    return;
                }
                callback && callback(target);
            });
        });
    });
}

module.exports = createExcel;
