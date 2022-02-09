const arrayManipulation = require("../src/arrayManipulation");
const { deepStrictEqual } = require("assert");

(() => {
  deepStrictEqual(
    arrayManipulation(10, [
      [1, 5, 3],
      [4, 8, 7],
      [6, 9, 1],
    ]),
    10
  );
})();
