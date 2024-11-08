export default function createInt8TypedArray(length, position, value) {
  // create typed array buffer based on length
  const buffer = new ArrayBuffer(length);
  // make dataview of whole buffer
  const dv1 = new DataView(buffer);
  // check if value is valid for int8
  if (value < -128 || value > 127) {
    throw new TypeError('Incorrect int value');
  }
  if (position < 0 || position >= length) {
    throw new RangeError('Position outside range');
  }
  // set value at position in DataView1
  dv1.setInt8(position, value);
  // return entire DataView1
  return dv1;
}
