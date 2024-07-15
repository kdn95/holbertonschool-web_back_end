export default function updateStudentGradeByCity(students, city, NewGrades){
  // filter out students that are in args city
  const specCity = students.filter((student) => student.location === city);
  // Checking each entry and apply mapping
  const changeGrade = specCity.map((student) => {
    // Filter NewGrades and find where the studentId matches to SpecCity student.id
    const updatedGrades = NewGrades.filter((grade) => grade.studentId === student.id);
    // create new reference data
    // const newStudent = student; no needed
    // if updatedGrades exist or more than nothing
    if (updatedGrades.length > 0) {
      // mutate the updated-NewGrades array where grade value is, and replace in student.grade value
      // where student is the filtered students based on location
      student.grade = updatedGrades[0].grade;
    }
    else {
      student.grade = 'N/A';
    }
    return student;
  });

  return changeGrade;
}