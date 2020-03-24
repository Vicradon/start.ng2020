const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.url === "/index" || req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    })
  }
  else if (req.url === "/message") {
    fs.readFile("message.html", (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    })
  }
  else {
    fs.readFile("404.html", (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    })
  }
  let jsonString = "";
  req.on('data', data => {
    jsonString += data;
    let message = jsonString.split('+').join(' ').split('');
    message.splice(0, 8);
    message = message.join('');

    fs.writeFile('message.txt', message, err => {
      if (err) throw err;
    })
  });

}).listen(8080);
