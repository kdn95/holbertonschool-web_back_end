export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(TheName) {
    if ((typeof TheName) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = TheName;
  }

  get length() {
    return this._length;
  }

  set length(TheLength) {
    if ((typeof TheLength) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = TheLength;
  }

  get students() {
    return this._students;
  }

  set students(TheStudents) {
    if (!Array.isArray(TheStudents)) {
      throw new TypeError('Needs to be an array');
    }
    this._students = TheStudents;
  }
}
