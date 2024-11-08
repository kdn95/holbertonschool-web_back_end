export default function hasValuesFromArray(set, array) {
  // access each value in array
  for (const num of array) {
    // check if any value of array is not in set
    if (!set.has(num)) {
      return false;
    }
  }
  return true;
}
