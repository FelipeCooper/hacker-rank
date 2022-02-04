const { deepStrictEqual } = require('assert');
const minimumBribes = require('../src/minimumBribes');

(()=>{
  deepStrictEqual(minimumBribes([ 1, 2, 5, 3, 7, 8, 6, 4 ]), 7)
})()