const { deepStrictEqual } = require("assert");
const checkMagazine = require("../src/checkMagazine");

(() => {
  // deepStrictEqual(
  //   checkMagazine(
  //     ["two", "times", "three", "is", "not", "four"],
  //     ["two", "times", "two", "is", "four"]
  //   ),
  //   "No"
  // );
  // deepStrictEqual(
  //   checkMagazine(
  //     ["give", "me", "one", "grand", "today", "night"],
  //     ["give", "one", "grand", "today"]
  //   ),
  //   "Yes"
  // );
  deepStrictEqual(
    checkMagazine(
      ["ive", "got", "a", "lovely", "bunch", "of", 'coconuts'],
      ["ive", "got", "some", "coconuts"]
    ),
    "No"
  );
})();
