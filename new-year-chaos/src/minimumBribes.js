function minimumBribes(array) {
  let bribes = 0;

  for (let i = 0; i < array.length; i++) {
    console.log(`i = ${i} / array[i] = ${array[i]}`)
    if ((array[i] - (i + 1)) > 2) return "Too chaotic";
    
    for (let j = array[i] - 2; j < i; j++) {
      console.log(`j = ${j} / array[j] = ${array[j]}`)
      if (array[j] > array[i]) {
        bribes++;
      }
    }
    console.log(`bribes = ${bribes}`)
  }

  return bribes;
}

module.exports = minimumBribes;

//Ass.: Fábio/Biava/Cooper