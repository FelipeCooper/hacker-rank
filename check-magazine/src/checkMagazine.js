function checkMagazine(magazine, note) {
  let result = "Yes";

  magazine = magazine.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  note.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    console.log(magazine[val] - acc[val] < 0)
    if (magazine[val] === undefined || magazine[val] - acc[val] < 0) {
      result = "No";
    }
    return acc;
  }, {});

  return result;
}

module.exports = checkMagazine;
