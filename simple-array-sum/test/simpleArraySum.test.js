const { deepStrictEqual } = require('assert');
const simpleArraySum = require('../simpleArraySum');


(()=>{
  deepStrictEqual(simpleArraySum([1,2,3,4,10,11]), 31)
})()