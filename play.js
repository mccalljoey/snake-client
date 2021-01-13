const { connect } = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  // let stdInput = setupInput();
  // stdInput.on('data', (key) => {
    switch (data) {
      case '\u0003' : process.exit();
      break;
      case 'w' : connection.write(`Move: up`)
      break;
      case 'a' : connection.write(`Move: left`)
      break;
      case 's' : connection.write(`Move: down`)
      break;
      case 'd' : connection.write(`Move: right`)
      break;
      case '\u000D' :connection.write('Say: ' + statement)
      statement = ''
      break;
      default: statement += data;
        break;
    } 
};