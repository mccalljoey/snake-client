const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    Port: `50542`,
    Host: `135.23.222.131`
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Connected')
  })
  conn.on('data', (data) => {
    console.log(data)
  })
  conn.on('Successfully connected to game server', (data) => {
    console.log(data)
  })
  conn.write(data = `Name: JOE`)

  return conn;
};

module.exports = { connect }