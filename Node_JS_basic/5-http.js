const http = require('http');
const url = require('url');

const countStudents = require('./3-read_file_async'); // Import countStudents

const theFile = process.argv[2]; // Database file from command-line argument

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Set header for plain text response
  res.setHeader('Content-Type', 'text/plain');

  // Handle root ("/") route
  if (parsedUrl.pathname === '/') {
    res.write('Hello Holberton School!');
    return res.end(); // End response after writing
  }

  // Handle "/students" route
  if (parsedUrl.pathname === '/students') {
    res.write('This is the list of our students\n'); // Add newline after the message

    try {
      // Call the countStudents function and pass the result to the response
      await countStudents(theFile);
    } catch (error) {
      // Handle errors (e.g., if the database can't be loaded)
      res.write(error.message);
    }

    return res.end(); // End response after writing
  }

  // If neither route matches, end the response
  res.end();
}).listen(1245); // HTTP server listening on port 1245

module.exports = app;
