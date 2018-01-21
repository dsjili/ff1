const http = require('http');

// event emitters - need to learn
// streams
// clusters

const server = http.createServer();

server.on('request', (req, res)=> {
  res.write("What up pussy!?!\n");

  setTimeout(() => {
    res.write("Still on. ...");
    res.end();
  }, 3000)
  
});

server.listen(8080);
