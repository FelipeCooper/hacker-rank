const { deepStrictEqual } = require('assert');
const minimumBribes = require('../src/minimumBribes');
const file1 = require('./fixtures/file-1');
const file2 = require('./fixtures/file-2');
const file3 = require('./fixtures/file-3');
const file4 = require('./fixtures/file-4');
const file5 = require('./fixtures/file-5');
const file6 = require('./fixtures/file-6');
const file7 = require('./fixtures/file-7');
const file8 = require('./fixtures/file-8');
const file9 = require('./fixtures/file-9');
const file10 = require('./fixtures/file-10');

(()=>{
  deepStrictEqual(minimumBribes([ 1, 2, 5, 3, 7, 8, 6, 4 ]), 7)
},
()=>{
  deepStrictEqual(minimumBribes(file1), 956)
},
()=>{
  deepStrictEqual(minimumBribes(file2), 943)
},
()=>{
  deepStrictEqual(minimumBribes(file3), 961)
},
()=>{
  deepStrictEqual(minimumBribes(file4), 953)
},
()=>{
  deepStrictEqual(minimumBribes(file5), "Too chaotic")
},
()=>{
  deepStrictEqual(minimumBribes(file6), "Too chaotic")
},
()=>{
  deepStrictEqual(minimumBribes(file7), "Too chaotic")
},
()=>{
  deepStrictEqual(minimumBribes(file8), "Too chaotic")
},
()=>{
  deepStrictEqual(minimumBribes(file9), 934)
},
()=>{
  deepStrictEqual(minimumBribes(file10), 961)
}
)()