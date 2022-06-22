const { deepStrictEqual } = require('assert');
const sherlockAndAnagrams = require('../src/sherlockAndAnagrams');

(()=>{
  deepStrictEqual(sherlockAndAnagrams('abba'), 4);
  deepStrictEqual(sherlockAndAnagrams('abcd'), 0);
  deepStrictEqual(sherlockAndAnagrams('cdcd'), 5);
  deepStrictEqual(sherlockAndAnagrams('kkkk'), 10);
})()