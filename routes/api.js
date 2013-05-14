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

exports.registerUser = function (req, res) {
  var data = req.body;
  console.log('req body', data);
  mongoDB.add('user', data, function(err, success){
  		console.log('add use', err, success);
  });
};