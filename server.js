
/**
 * Module dependencies.
 */
var express = require('express'),
  everyauth = require('everyauth'),
  googleAuthenticate = require('./business/googleAuthenticate'),
  mongoDB = require('./business/mongoDB'),
  authenticateRequest = require('./middleware/authenticateRequest');
  validateRoutes = require('./middleware/validateRoutes');
  routes = require('./routes'),
  api = require('./routes/api');
  helper = require('./business/helper');

var app = module.exports = express();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.cookieSession({secret:'keypoint'}))
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(everyauth.middleware());
  // app.use(authenticateRequest());
  app.use(validateRoutes());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);
app.post('/api/registerUser', api.registerUser);
app.post('/api/login', api.login);


// redirect all other request to the index (HTML5 history)
app.get('*', routes.index);

// process.on('uncaughtException', function(err) {
//   process.exit();
// });

// process.on('SIGTERM', function(err) {
//   process.exit();
// });

// Start server
app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
