var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var expressSession = require('express-session');
//var MongoStore = require('connect-mongo')(expressSession);
var connectRedisSessions = require('connect-redis-sessions');

var db = require('./config/db');
var route_index = require('./routes/index');
var route_login = require('./routes/login');
var route_list = require('./routes/list');
//var route_download = require('./routes/download');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(expressSession({
//    secret: '123456',
//    name: 'usersid',
//    cookie: {maxAge: 80000},
//    resave: false,
//    saveUninitialized: true,
//    store: new MongoStore({
//        host: '127.0.0.1',
//        port: 27017,
//        db: 'sessions'
//    })
//}));
app.use(connectRedisSessions({
  app: 'baic', //所属总作用域
  cookie: {
    maxAge: 1000 * 60 * 300,
    path: '/', //cookie路径
    httpOnly: true
  },
  host: '192.168.1.108',
  port: 6379,
  namespace: '', //redis key前缀
  ttl: 60 * 60, //过期时间，单位s，默认7200
  wipe: 60 * 10, //定期清除超时session间隔时间，单位s，默认600
  trustProxy: false //只接受https cookies
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', route_index);
app.use('/login', route_login);
app.use('/list', route_list);
//app.use('/download', route_download);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;