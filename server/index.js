// event emitters - need to learn
// streams
// clusters

const http = require('http');
const fs = require('fs');
const express = require('express');

/*
const server = http.createServer();

server.on('request', (req, res)=> {
  res.end(fs.readFileSync(__dirname + '/../client/index.html'));
});

server.listen(8080);
*/

const app = express();

app.use(express.static('client'));
//app.get('/', (req, res) => {
//  res.sendFile(__dirname + '../client/index.html');
//});

app.listen(8080);
