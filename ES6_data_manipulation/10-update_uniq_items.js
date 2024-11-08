export default function updateUniqueItems(item) {
  // if item is not even a Map, throw error
  if (!(item instanceof Map)) {
    throw new TypeError('Cannot process');
  }
  // getting all values in item map
  const theList = [...item];
  // for each key:value pair of spread item list
  for (const [key, value] of theList) {
    // if value is 1
    if (value === 1) {
      // set value based on key in item list to 100
      item.set(key, 100);
    }
  }
}
