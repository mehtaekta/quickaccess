(function() {
  var collections, databaseURL, db, mongojs;

  mongojs = require('mongojs');

  databaseURL = 'keypoint';

  collections = ["user"];

  var db = mongojs(databaseURL, collections);
  // var db = mongojs('example.com/mydb', ['mycollection']);

  exports.find = function(collection, criteria, callback) {
    db.user.find(criteria, function(err, users) {
      // if (err || users.length <= 0) {
      //   console.log("No users found");
      // } else {
      //   users.forEach(function(user) {
      //     console.log('user found', user);
      //   });
      // }
      return callback(err, users);
    });
  };

  exports.add = function(collection, data, callback) {
    db.user.save(data, function(err, success) {
      console.log('data mongo', success);
      // console.log('&&&&&&&&&&&&&&', success);
      // if (err || !success) {
      //   console.log("Unable to save data");
      // } else {
      //   console.log("Data saved successfully");
      // }
      return callback(err, success);
    });
  };

}).call(this);
