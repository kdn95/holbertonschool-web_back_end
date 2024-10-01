// create a small HTTP server using the http module:
// It should be assigned to the variable app and this one must be exported
// HTTP server should listen on port 1245
// Displays Hello Holberton School! in the page body for any endpoint as plain text

// import module http
const http = require("http")

// create server
const app = http.createServer((req, res) => {
  // send response 'OK' status code 200
  res.writeHead(200);
  // send response text at the end
  res.end("Hello Holberton School!")
  // make sure that createServer function also listens to port 1245
}).listen(1245);

module.exports = app;

