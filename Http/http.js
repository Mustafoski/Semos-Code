const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const { url } = req;

  if (url === '/') {
    res.write('<h1>This is Home route</h1>');
  } else if (url === '/users') {
    res.write('<h1>This is the User route </h1>');
  } else {
    res.write("I'm not familiar with that route");
  }
  res.end();
});
console.log('Server running at http://localhost:3000/');
server.listen(3000);
