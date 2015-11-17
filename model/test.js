var db = require('../config/db');
var testSchema = require('../schema/test');

var testModel = db.model('test', testSchema, 'test');

module.exports = testModel;
