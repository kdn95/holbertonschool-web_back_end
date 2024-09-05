process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("data", data  => {
  var name = data.toString();
  process.stdout.write(`Your name is: ${name}\n`);
});

process.on('SIGINT', function() {
  console.log('This important software is now closing\n');
  process.exit();
});
