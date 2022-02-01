function repeatedString(s, n) {
  const leftOver = n % s.length;
  const fullRepeatedString = parseInt(n / s.length);

  const leftOverVerfiedA = s.substring(0, leftOver).split('a').length - 1
  const verifiedA = s.split('a').length - 1
  return verifiedA * fullRepeatedString + leftOverVerfiedA;
}

module.exports = repeatedString;
