var http = require('http');
var ccap = require('ccap')({
  width:140,
  height:50,
  offset:30,
  quality:50,
  fontsize:44,
  generate: abc
});

function abc() {
  return Date.now().toString().slice(-4);
}

http.createServer(function (request, response) {
  if(request.url == '/favicon.ico')return response.end('');//Intercept request favicon.ico
  var ary = ccap.get();
  var txt = ary[0];
  var buf = ary[1];
  response.end(buf);
  console.log(txt);
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');