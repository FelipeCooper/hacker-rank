function simpleArraySum(array) {
  let sum=0;
  const mid = parseInt(array.length/2)

  for(let left=0; left < mid ; left++){
    const rigth = array.length - left - 1
    sum = left !== rigth ? sum + array[left] + array[rigth]: sum + array[left]
  }
  return sum
}

module.exports = simpleArraySum