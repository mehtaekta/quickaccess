(function() {
  var collections, databaseURL, db, mongojs;

  mongojs = require('mongojs');

  // databaseURL = 'mongodb://emehta:emehta@localhost:27017/keypoint';
    databaseURL = 'keypoint';

  collections = ["user", "book"];

  var db = mongojs(databaseURL, collections);
  // var db = mongojs('example.com/mydb', ['mycollection']);
  // console.log('mongo db connection',db)

  exports.find = function(collection, criteria, callback) {
    db[collection].find(criteria, function(err, users) {

      // console.log('&&&&&&&&&&&&&& find', callback, err, users);
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
    db[collection].save(data, function(err, success) {
      // console.log('&&&&&&&&&&&&&& add', err, success);
      // if (err || !success) {
      //   console.log("Unable to save data");
      // } else {
      //   console.log("Data saved successfully");
      // }
      return callback(err, success);
    });
  };

}).call(this);
