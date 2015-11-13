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