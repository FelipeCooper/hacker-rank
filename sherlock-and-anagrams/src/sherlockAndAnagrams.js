function sherlockAndAnagrams(text) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < text.length + 1; i++) {
    for (let j = i + 1; j < text.length + 1; j++) {
      let substring = text.substring(i, j);
      if (substring === text) continue;
      arr.push(substring);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (i !== j && isAnagrams(arr[i], arr[j])) {
        count++;
      }
    }
  }
  return count;
}

function isAnagrams(string1, string2) {
  return (
    string1.split("").sort().join("") === string2.split("").sort().join("")
  );
}

module.exports = sherlockAndAnagrams;
