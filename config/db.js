"use strict";
var mongoose = require('mongoose');
var ejsExcel = require("ejsexcel");
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/test');

console.log("step into db config!");

db.on('open', function () {
    console.log('now,has connected to mongodb!');
});

db.on('error', function (err) {
    console.log(err);
});

module.exports = db;
