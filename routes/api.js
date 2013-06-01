/*
 * Serve JSON to our AngularJS client
 */
 var mongoDB = require('../business/mongoDB')
  helper = require('../business/helper');

exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};

exports.GoogleAuth = function(req, res) {
	
}

exports.registerUser = function (req, res, next) {
  var data = req.body;
  // console.log('data', data, mongoDB);
  mongoDB.find('user', {email: data.email}, function(err, result){
    if(err || result.length>0){
      console.log('record exists', data.email);
      next('Email already exists in our system');
    }
    else {
      console.log('add new user')
      mongoDB.add('user', data, function(err, result){
        if(err)
          next(err);
        else
          res.json(data, 200);
      });  
    }
  });  
};

exports.login = function (req, res, next) {
  var data = req.body;
  var remember = data.remember;
  delete data.remember;
  // console.log('data', data);
  mongoDB.find('user', data, function(err, result){
      if(err || result.length <= 0)
        next(err);
      else {
        console.log('result', helper.AuthCookie, result[0]);
        res.cookie(helper.AuthCookie, JSON.stringify(result[0]), {path:'/'});
        req.session.user = result[0];
        res.json(result, 200);
      }
  });  
};

exports.books = function(req, res, next) {
  var data = {};
  data.user_id = helper.getLoggedInUserInfo(req)._id;
  // console.log('book data', data);

  mongoDB.find('book', data, function(err, result){
      if(err || result.length <= 0)
        next(err);
      else {
        // console.log(result);
        data.books = result;
        res.json(data, 200);
      }
  });  
};

exports.add_book = function(req, res, next) {
  var data = req.body;
  data.user_id = helper.getLoggedInUserInfo(req)._id;
  console.log('book data', data);

  mongoDB.add('book', data, function(err, result){
      if(err || result.length <= 0)
        next(err);
      else {
        res.json(result, 200);
      }
  });  
};
