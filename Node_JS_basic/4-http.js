// create a small HTTP server using the http module:
// It should be assigned to the variable app and this one must be exported
// HTTP server should listen on port 1245
// Displays Hello Holberton School! in the page body for any endpoint as plain text

// import module http
const http = require("http")

// create server
const app = http.createServer((req, res) => {
  // send response
  res.writeHead(200);
  res.end("Hello Holberton School!")
}).listen(1245);

module.exports = app;

