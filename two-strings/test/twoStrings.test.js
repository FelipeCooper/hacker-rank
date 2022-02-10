const { deepStrictEqual } = require('assert');
const twoStrings = require('../src/twoStrings');
(()=>{
  deepStrictEqual(twoStrings("hi", 'world'),'No')
})()