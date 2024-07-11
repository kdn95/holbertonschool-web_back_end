export default function appendToEachArrayValue(array, appendString) {
  //declared idx and value at top
  var idx;
  var value;

  for (idx in array) {
    value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}