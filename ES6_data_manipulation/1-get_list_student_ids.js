export default function getListStudentIds(x) {
  // create empty array
  const arr1 = [];
  // if arg input is not an array return arr1
  if (!Array.isArray(x)) {
    return arr1;
  }
  // map element in arg and verifying the 'id' element
  // put it through the Number() method
  const studId = x.map((element) => Number(element.id));
  // return studId
  return studId;
}
