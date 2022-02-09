const { deepStrictEqual } = require("assert");
const minimumSwaps = require("../src/minimum-swap");

(() => {
  deepStrictEqual(minimumSwaps([2, 3, 4, 1, 5]), 3);
},
() => {
  deepStrictEqual(minimumSwaps([4, 3, 1, 2]), 3);
}
)();
