// add whatever parameters you deem necessary
function minSubarrayLength(arr, target) {
  let i = 0;
  let j = -1;
  let sum = 0;
  let minLength = Infinity;

  while(j < arr.length && (i < arr.length || sum > target)){
    if(sum < target){
      j++
      sum += arr[j];
    }
    if(sum >= target){
      minLength = Math.min(minLength, j - i + 1);
      sum -= arr[i];
      i++
    }
  }

  if(j === arr.length && i === 0){
    return 0;
  }

  return minLength;
}

module.exports = minSubarrayLength;
