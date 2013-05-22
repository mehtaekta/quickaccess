/*
 * Serve JSON to our AngularJS client
 */
 var mongoDB = require('../business/mongoDB');

exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};

exports.GoogleAuth = function(req, res) {
	
}

exports.registerUser = function (req, res, next) {
  var data = req.body;
  console.log('data', data, mongoDB);
  mongoDB.find({email: data.email}, function(err, result){
    if(err || result){
      console.log('record exists', data.email);
      next('Email already exists in our system');
    }
    else {
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
  console.log('data', data);
  mongoDB.find('user', data, function(err, result){
      if(err)
        next(err);
      else {
        console.log('result', result);
        res.json(result, 200);
      }
  });  
};