const { deepStrictEqual } = require('assert');
const jumpingOnClouds = require('../src/jumpingOnClouds');


(()=>{
  deepStrictEqual(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]), 4)
},
()=>{
  deepStrictEqual(jumpingOnClouds([0, 0, 0, 0, 1, 0]), 3)
},
()=>{
  deepStrictEqual(jumpingOnClouds([0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]), 
  53)
})()


