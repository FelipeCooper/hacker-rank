const { deepStrictEqual } = require("assert");
const leftRotation = require("../src/leftRotation");

(() => {
  deepStrictEqual(leftRotation([1, 2, 3, 4, 5], 4), [5, 1, 2, 3, 4]);
},
() => {
  deepStrictEqual(
    leftRotation(
      [
        41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86,
        51,
      ],
      10
    ),
    [
      77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84,
      77,
    ]
  );
})();
