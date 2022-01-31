const { deepStrictEqual } = require('assert');
const salesByMatch = require('../salesByMatch');
(()=>{
  const result = salesByMatch(9,[10, 20, 20, 10, 10, 30, 50, 10, 20])
  deepStrictEqual(result, 3)
})()