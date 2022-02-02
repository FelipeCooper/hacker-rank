function leftRotation(array, rotations) {
  const rotateNumber =
    array.length > rotations
      ? array.length - rotations
      : rotations % array.length;
  const rotationStartArray = array.slice(
    array.length - rotateNumber,
    array.length
  );
  const rotationEndArray = array.slice(0, array.length - rotateNumber);
  return [...rotationStartArray, ...rotationEndArray];
}
module.exports = leftRotation;
