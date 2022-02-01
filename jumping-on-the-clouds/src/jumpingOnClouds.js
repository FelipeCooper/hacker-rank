function jumpingOnClouds(c){
  let location = 0;
  let jumps = 0;
  while (location !== c.length-1){
    location += c[location+2] === 0 ? 2 : 1 ;
    jumps++
  }
  return jumps;
}

module.exports = jumpingOnClouds