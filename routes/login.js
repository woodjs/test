"use strict";
var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var testModel = require('../model/test');

router.use(function (req, res, next) {
  console.log('now step into login module!');
  next();
});

router.route('/').get(function (req, res) {

  res.render('login', {
    title: '登录页',
    header: '请填写相关信息'
  });

}).post(function (req, res) {
  var userInfo = req.body;
  var pro = new Promise(function (resolve, reject) {
    testModel.find({username: userInfo.username}, function (err, docs) {
      if (err) {
        console.log(err);
      }
      if (docs.length) {
        reject('has reg');
      } else {
        userInfo.password = crypto.createHash('md5').update(userInfo.password).digest('hex');
        resolve(userInfo);
      }
    });
  });

  pro.then(function (val) {
    console.log(val);
    testModel.create(val, function (err, docs) {
      if (err) {
        console.log(err);
      }
    });
    return 'hhahaha';
  }, function (val) {
    res.send(val);
  }).then(function (val) {
    res.send(val);
  });

});

router.route('/epcmLogin').post(function (req, res) {
  var token = req.body.token;

  if (token) {

    var redisSessions = req.session.getRedisSessionsModule();

    redisSessions.get({
      app: 'baic',
      token: token
    }, function (err, data) {

      if (data.id) {
        console.log('1111111');
        console.log(token);

        req.session.upgrade(data.id, function () {
          Object.assign(req.session, req.session.d);
          Object.assign(req.session, {
            testAdd: 'yes'
          });


          //redisSessions.soid({
          //  app: 'baic',
          //  id: data.id
          //}, function (err, result) {
          //  console.log('--------------');
          //  console.log(result);
          //
          //  redisSessions.killsoid({
          //    app: 'baic',
          //    id: data.id
          //  }, function () {
          //
          //    res.send({
          //      result: '/'
          //    });
          //  });
          //
          //});


          req.session.soid(function (err, result) {
            console.log('--------------');
            console.log(result);

            req.session.destroyall(function () {
              res.send({
                result: '/'
              });
            });

          });


        });


      } else {

        res.status(401);
        res.send({message: '未授权，EPCM登录失败！'});

      }
    });
  } else {
    res.status(403);
    res.send({message: ' 禁止访问！'});
  }
});

module.exports = router;