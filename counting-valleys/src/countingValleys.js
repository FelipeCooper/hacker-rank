function countingValley(steps, path) {
  let valey = 0;
  let location = 0
  let pathArray = path.slice()
  for(let i=0; i < steps; i++){
    location = pathArray[i] === 'U'? location + 1: location-1;
    if(location === 0 && pathArray[i] === 'U'){
      valey++
    }
  }
  return valey
}

module.exports = countingValley;
