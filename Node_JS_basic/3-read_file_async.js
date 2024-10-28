const fs = require('fs').promises;

module.exports = async function countStudents(theFile) {
  try {
    // Read the file content asynchronously
    const readFile = await fs.readFile(theFile, 'utf-8');

    if (!readFile.trim()) {
      throw new Error('Cannot load the database');
    }

    const rows = readFile.trim().split('\n');
    if (rows.length < 2) {
      throw new Error('No data available');
    }

    // Remove header row and process students
    const csStudents = [];
    const sweStudents = [];

    // Skip the first row (headers)
    for (const row of rows.slice(1)) {
      const info = row.split(',');

      if (info[3] === 'CS') {
        csStudents.push(info[0]);
      } else if (info[3] === 'SWE') {
        sweStudents.push(info[0]);
      }
    }

    console.log(`Number of students: ${rows.length - 1}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    // Log the error and rethrow it
    console.error('Cannot load the database:', error.message);
    throw new Error('Cannot load the database');
  }
};
