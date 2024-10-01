const fs = require('fs');

module.exports = function countStudents(dbFile) {
  // should accept a db file in argument - yes
  // should attempt to read the db file synchronously
  try {
    const syncFile = fs.readFileSync(dbFile, 'utf-8');

    if (!syncFile.trim()) {
      throw new Error('Cannot load the database');
    }
    // if available, should log the following message to console: number of students
    const rows = syncFile.split('\n').splice(1);
    // It should log the number of students in each field,
    // list with the following format: Number of students in FIELD: 6 List:LIST_OF_FIRSTNAMES
    // declare new lists for both students
    const csStudents = [];
    const sweStudents = [];
    // loop each row and split into individual columns
    for (const row of rows) {
      const info = row.split(',');
      // CS students into list based on their firstnames
      if (info[3] === 'CS') {
        csStudents.push(info[0]);
      }
      // same but for SWE students
      if (info[3] === 'SWE') {
        sweStudents.push(info[0]);
      }
    }

    console.log(`Number of students: ${rows.length - 1}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (err) {
    // console.error(`Error occurred: ${err.message}`);
    throw new Error('Cannot load the database');
  }
};
