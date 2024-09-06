const fs = require('fs').promises;

module.exports = function countStudents(the_file) {
  // create a Promise and use an async for the resolve and reject
  const StudentPromise = new Promise(async (resolve, reject) => {
    try {
      // we await the file content to be read before processing it
      const read_file = await fs.readFile(the_file, 'utf-8');

      if (!read_file.trim()) {
        throw new Error('Cannot load the database');
      }
      const rows = read_file.split('\n');

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

      if(SWE_students != null || CS_students != null) {
        resolve(
          console.log(`Number of students: ${rows.length - 1}`),
          console.log(`Number of students in CS: ${CS_students.length}. List: ${CS_students.join(', ')}`),
          console.log(`Number of students in SWE: ${SWE_students.length}. List: ${SWE_students.join(', ')}`)
        );
      } else {
        reject(new Error('Cannot load the database'));
      }
    } catch (error) {
      // reject(new Error('Cannot load the database'));
      reject(error);
    }
    
  });

  return StudentPromise;
}