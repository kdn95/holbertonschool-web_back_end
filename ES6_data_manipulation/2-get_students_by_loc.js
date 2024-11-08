export default function getStudentsByLocation(x, y) {
  // Filter element funct
  // Element funct returns element.location equal to
  // arg "y"
  const name = x.filter((element) => element.location === y);
  return name;
}
