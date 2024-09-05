const fs = require('fs');

module.exports = function countStudents(db_file) {
  // should accept a db file in argument - yes
  // should attempt to read the db file synchronously
  try {
    const sync_file = fs.readFileSync(db_file, 'utf-8');

    if (!sync_file.trim()) {
      throw new Error('Cannot load the database');
    }
    // if available, should log the following message to console: number of students
    const rows = sync_file.split('\n');
    // It should log the number of students in each field,
    // and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
    // declare new lists for both students
    const CS_students = [];
    const SWE_students = [];
    // loop each row and split into individual columns
    for (const row of rows) {
      const info = row.split(',');
      // CS students into list based on their firstnames
      if (info[3] === 'CS') {
        CS_students.push(info[0]);
      }
      // same but for SWE students
      if (info[3] === 'SWE') {
        SWE_students.push(info[0]);
      }
    }

    console.log(`Number of students: ${rows.length - 1}`);
    console.log(`Number of students in CS: ${CS_students.length}. List: ${CS_students.join(', ')}`);
    console.log(`Number of students in SWE: ${SWE_students.length}. List: ${SWE_students.join(', ')}`);
  } catch (err) {
    // console.error(`Error occurred: ${err.message}`);
    throw new Error('Cannot load the database');
  }
};