const express = require('express');
const pug = require('pug');
const helmet = require('helmet');
const app = express();
const bodyParser = require('body-parser');
const Rcontest = require('./RCON');
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

var server = app.listen(3001, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})

Rcontest.sendRcon('173.199.105.173', 12203, 'test', 'getstatus');