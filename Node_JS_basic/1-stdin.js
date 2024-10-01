process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) process.stdout.write(`Your name is: ${input}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

// process.stdin.on("data", data  => {
//   const name = data.toString();
//   process.stdout.write(`Your name is: ${name}\n`);
// });
// process.on('SIGINT', function() {
//   console.log('This important software is now closing\n');
//   process.exit();
// });
