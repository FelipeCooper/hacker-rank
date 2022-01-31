function salesByMatch(n, arr) {
  let pairSocks = 0;
  const odd = {};
  for (let i = 0; i < n; i++) {
    const color = arr[i];
    pairSocks = odd[color]? pairSocks + 1: pairSocks
    odd[color] = odd[color]? undefined: 1
  }
  return pairSocks;
}

module.exports = salesByMatch;
