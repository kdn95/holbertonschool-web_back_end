const fs = require('fs').promises;

module.exports = async function countStudents(theFile) {
  // create a Promise and use an async for the resolve and reject
  //const StudentPromise = new Promise((resolve, reject) => {
    try {
      // we await the file content to be read before processing it
      const readFile = await fs.readFile(theFile, 'utf-8');

      if (!readFile.trim()) {
        throw new Error('Cannot load the database');
      }
      const rows = readFile.split('\n');

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
      if(sweStudents != null || csStudents != null) {
        resolve(
          console.log(`Number of students: ${rows.length - 1}`),
          console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`),
          console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`),
        );
      } else {
        reject(new Error('Cannot load the database'));
      }
    } catch (error) {
      // reject(new Error('Cannot load the database'));
      reject(error);
    }
  }

};