"use strict";
var mongoose = require('mongoose');
var ejsExcel = require("ejsexcel");

var db = mongoose.connect('mongodb://127.0.0.1:27017/test');

console.log("step into db config!");

exports = db;
