'use strict'

const dgram = require('dgram');
const _buffer = "\xFF\xFF\xFF\xFF\x02";

module.exports = {
  sendRcon: function (ip, port, password, command) {
    var client = dgram.createSocket('udp4');
    var sendMessage =  Buffer.from(_buffer + "rcon " +  password +" "+ command, "binary");

    client.send(sendMessage, 0, sendMessage.length, port, ip, function(err, bytes) {
      if (err) return err;
        console.log('UDP message sent to ' + ip +':'+ port);
    });

    client.on('error', function(e) {
      console.log(e);
      return e;
    });

    client.on("message", function(message, rinfo) {
      console.log("received: ",message.toString('utf8').substring(4),rinfo);
      return message.toString('utf8').substring(4);
    });

}
}
