function arrayManipulation(n, queries) {
  let max = 0;
  const params = [];

  queries.forEach(([a, b, k]) => {
    params.push(
      {
        key: a,
        val: k,
      },
      {
        key: b,
        val: -k,
      }
    );
  });

  let sum = 0;
  params
    .sort((item1, item2) =>
      item1.key === item2.key ? item2.val - item1.val : item1.key - item2.key
    )
    .forEach(({ val }) => {
      sum += val;
      if (sum > max) {
        max = sum;
      }
    });
  return max;
}
// First Attempt, no consult discussion
// function arrayManipulation(n, queries){
//   const array = [];
//   let max = 0
//   queries.forEach(query => {
//     let a = query[0] - 1
//     let b = query[1] - 1
//     const k = query[2]
//     while(a <= b){
//       const sum  = (array[a] || 0) +k
//       if(sum > max){
//         max = sum
//       }
//       array[a] = sum;
//       a++
//     }
//   });
//   return max
// }

module.exports = arrayManipulation;
