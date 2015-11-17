var mongoose = require('mongoose');
var testSchema = new mongoose.Schema({
    'username': {
        'type': 'String',
        'default': 'woodjs'
    },
    'password': {
        'type': 'String'
    },
    'title': {
        'type': 'String'
    },
    'content': {
        'type': 'String'
    }
});

testSchema.methods.getPwd = function () {
    return this.password;
};

testSchema.statics.getLength = function () {
    return this;
};

module.exports = testSchema;