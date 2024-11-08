export default function updateStudentGradeByCity(list, city, newGrades) {
  // filter out students that are in args city
  const cityStudents = list.filter((student) => student.location === city);
  // Checking each entry and apply mapping
  const gradedStudents = cityStudents.map((student) => {
    // Filter NewGrades and find where the studentId matches to SpecCity student.id
    const userGrades = newGrades.filter((grade) => grade.studentId === student.id);
    // create new reference data
    // if updatedGrades exist or more than nothing
    const newStudent = student;
    if (userGrades.length > 0) {
      // mutate the updated-NewGrades array where grade value is, and replace in student.grade value
      // where student is the filtered students based on location
      newStudent.grade = userGrades[0].grade;
    } else {
      newStudent.grade = 'N/A';
    }
    return newStudent;
  });

  return gradedStudents;
}
