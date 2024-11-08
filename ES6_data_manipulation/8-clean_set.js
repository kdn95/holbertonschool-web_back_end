export default function cleanSet(set, startString) {
  // returns a string of all the set values that start with a specific string
  if (!(startString.length)) {
    return '';
  }
  // declare tempArray
  const tempArray = [];
  // for every word in spread of set
  for (const word of [...set]) {
    // check if word starts with 'bon'
    if (word.startsWith(startString)) {
      // if true, we declare its idx position
      const position = word.indexOf(startString);
      // if idx position of 'bon' is at the start of the word
      if (position === 0) {
        // push() sliced word starting after 'bon' into tempArray
        tempArray.push(word.slice(startString.length));
      }
    }
  }
  // return array into a string joining together with '-'
  return tempArray.join('-');
}
