'use strict'

const dgram = require('dgram');
const _buffer = '\xFF\xFF\xFF\xFF\x02rcon '


module.exports = {
  sendRcon: function (ip, port, password, command) {
    var client = dgram.createSocket('udp4');

    client.on("message", function(message, rinfo) {
      console.log("received: ",message.toString('utf8'),rinfo);
    });

      client.send(_buffer + command, 0, _buffer.length + command.length, port, ip, function(err, bytes) {
    if (err) throw err;
      console.log('UDP message sent to ' + ip +':'+ port);
});

}
}
