function sherlockAndAnagrams(text) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length + 1; j++) {
      arr.push(text.substring(i, j).split("").sort().join(""));
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
  }
  return count;
}

module.exports = sherlockAndAnagrams;
