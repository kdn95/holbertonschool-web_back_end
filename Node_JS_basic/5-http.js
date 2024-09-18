// It should be assigned to the variable app and this one must be exported
// HTTP server should listen on port 1245
// It should return plain text
// When the URL path is /, it should display Hello Holberton School! in the page body
// When the URL path is /students, it should display This is the list of our students followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
// CSV file can contain empty lines (at the end) - and they are not a valid student!

// import http & url module
const http = require("http")
var url = require("url")
// import function from proj. 3
const countStudents = require('./3-read_file_async');
// the db file from command-line arg
const theFile = process.argv[2];

const app = http.createServer(async (req, res) => {
  // url parse method of request url to chop-it urp
  var linkz = url.parse(req.url, true);
  // set header for plain text
  res.setHeader('Content-Type', 'text/plain');

  if (linkz.pathname === "/") {
    res.write("Hello Holberton School!");
    return res.end();
  }

  if (linkz.pathname === "/students") {
    res.write("This is the list of our students");
    
    try {
      // wait for countStudent function and add to response above
      const studentList = await countStudents(theFile);
      const thePrint = studentList.toString();
      // response write
      res.write(thePrint);
    } catch (error) {
      // error handling
      res.write(error.message);
    }

    return res.end();
  }
}).listen(1245);

module.exports = app;
