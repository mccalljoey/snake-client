const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    Port: `50542`,
    Host: `135.23.222.131`
  });