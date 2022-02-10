function twoStrings(s1, s2) {
  let regexString = "";
  s1.replace(" ", "")
    .split("")
    .reduce((acc, val) => {
      if (acc[val]) {
        return acc;
      }
      acc[val] = true;
      regexString = regexString.concat(`${regexString ? "|" : ""}${val}`);
      return acc;
    }, {});
  const regex = new RegExp(regexString);
  return regex.test(s2) ? "Yes" : "No";
}
module.exports = twoStrings;
