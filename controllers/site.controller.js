const Rcon = require('../RCON.js');

exports.showFrontpage = (req, res) => {
  res.render('index', {
    title: 'Server'
  });
};


exports.handleRCON = (req, res) => {
  const ipaddress = eq.body.ipaddress;
  const port = req.body.port;
  const password = req.body.password;
  const command = req.body.command;

  res.render('index', {
    title: 'Server'
  });
};
