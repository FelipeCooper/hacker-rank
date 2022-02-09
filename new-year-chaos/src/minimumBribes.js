function minimumBribes(array) {
  let bribes = 0;
  let min = array.length;
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] - i > 3) {
      console.log("Too chaotic");
      return "Too chaotic";
    }
    if (array[i] > i + 1) {
      bribes += array[i] - (i + 1);
    } else if (min > array[i]) {
      min = array[i];
    } else {
      bribes++;
    }
  }
  return bribes;
}

module.exports = minimumBribes;
