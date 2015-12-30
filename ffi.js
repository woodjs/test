var ffi = require('ffi');
var path = require('path');

var lib = ffi.Library(path.join(__dirname, '../rust/nodejs/target/debug/nodejs.dll'), {
  node: ['int', ['int']]
});

var num = lib.node(20);

console.log(num);
