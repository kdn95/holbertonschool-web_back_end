export default function appendToEachArrayValue(array, appendString) {
  // declared idx and value at top
  let idx = 0;
  const array2 = [];

  for (const value of array) {
    array2[idx] = appendString + value;
    idx += 1;
  }

  return array2;
}
