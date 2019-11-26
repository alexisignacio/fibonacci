
/**
 * Module dependencies.
 */

var express = require('express')
,   routes = require('./routes')
,   user = require('./routes/user')
,   http = require('http')
,   path = require('path')
,   config = require('./routes/config');

var app = express()
,   server = http.createServer(app);


module.exports = server

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.static(path.join(__dirname, 'public')));
  /*app.use(express.logger('dev'));*/
  app.use(express.compress());
  app.use (express.urlencoded ());
  app.use (express.json ());
  app.use(express.methodOverride());  
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});


app.get('/get_fibonacci/:enesimo',config.get_fibonacci);

// development only
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  console.log("Modo de desarollo");
});



server.listen(app.get('port'), function(){
  //console.log('Express server listening on port ' + app.get('port'));
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
  console.log(' ');
});
