function simpleArraySum(array) {
  let sum=0;
  const max = array.length
  const mid = parseInt(max/2)

  for(let left=0; left <= mid ; left++){
    const rigth = array.length - left - 1
    console.log(left !== rigth , rigth, left, array.length)
    sum = left !== rigth ? sum + array[left] + array[rigth]: sum + array[left]
  }
  return sum
}

module.exports = simpleArraySum