let connection; 
let statement = ''; 


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  // stdin.resume();
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (controls.hasOwnProperty(key.toLowerCase())) {
      conn.write(controls[key]);
    } else if (message.hasOwnProperty(key)) {
      conn.write(message[key]);
    }
  });
  return stdin;
};



module.exports = { setupInput };