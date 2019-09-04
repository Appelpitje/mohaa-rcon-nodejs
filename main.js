const express = require('express');
const pug = require('pug');
const helmet = require('helmet');
const app = express();
const bodyParser = require('body-parser');
const Rcontest = require('./RCON');
var lupus = require('lupus');
app.use(bodyParser.json())

//router
require('./controllers/site.route.js')(app);

//express settings
app.use(helmet());
app.set('view engine', 'pug');
app.set('views', 'views');
if (app.get('env') === 'development') {
  app.locals.pretty = true;
}


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})

// lupus(1, 100, function(n) {
//   console.log("We're on:", n);
  Rcontest.sendRcon('185.107.96.227', "12203", '', 'getstatus');
// }, function() {
//   console.log('All done!');
// }).setInterval(100);


// for(var i = 0; i < 2; i++){
// Rcontest.sendRcon('185.107.96.227', "12203", 'test', 'getstatus');}
// for(var i = 0; i < 20; i++){
// Rcontest.sendRcon('37.114.109.82', "28960", 'test', 'status');}
// for(var i = 0; i < 5; i++){
// Rcontest.sendRcon('31.186.251.239', "12203", 'test', 'getstatus');}
