function minimumSwaps(arr) {
  let swap = 0;
  for(let index = 0; index < arr.length; index++){
    if(arr[index] !== index + 1){
      let indexOf;
      for(let i=0; i < arr.length; i++){
        if(arr[i] === index + 1){
          indexOf = i;
          break;
        }
      }
      arr[indexOf] = arr[index]
      arr[index] = index + 1
      swap++
    }
  }
return swap
}

module.exports = minimumSwaps;