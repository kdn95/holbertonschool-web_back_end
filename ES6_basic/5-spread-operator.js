export default function concatArrays(array1, array2, string) {
  // return concat both arrays AND include spread syntax of str in concat
  return array1.concat(array2, ...string)
}