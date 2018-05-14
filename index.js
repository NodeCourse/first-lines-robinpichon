const fs = require('fs');
setInterval (write, 1000)

function write () {
  const actual = Date.now()
  console.log( actual);
  fs.appendFileSync('message.txt', actual + "\n");
}
