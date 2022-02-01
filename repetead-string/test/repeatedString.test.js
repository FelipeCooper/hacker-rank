const { deepStrictEqual } = require('assert');
const repeatedString = require('../src/repeatedString');

(()=>{
  deepStrictEqual(repeatedString('aba',10), 7)
},
()=>{
  deepStrictEqual(repeatedString('a',100000), 100000)
})()