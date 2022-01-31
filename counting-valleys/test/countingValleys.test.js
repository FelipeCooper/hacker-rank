const { deepStrictEqual } = require("assert");
const countingValley = require("../src/countingValleys");

(() => {
  const result = countingValley(8, 'UDDDUDUU')
  deepStrictEqual(result, 1);
},
() => {
  const result = countingValley(8,'DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD' )
  deepStrictEqual(result, 2);
})();