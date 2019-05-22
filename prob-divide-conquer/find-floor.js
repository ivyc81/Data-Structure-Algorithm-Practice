function findFloor(arr, target) {
  let end = arr.length;
  let start = 0;
  let idx = start + Math.floor((end - start) / 2);

  while(end >= start){
    if(arr[idx] <= target && (arr[idx + 1] > target || idx === arr.length - 1)){
      break;
    } else if(arr[idx] > target){
      end = idx - 1;
    } else {
      start = idx + 1;
    }

    idx = start + Math.floor((end - start) / 2);
  }

  return arr[idx] || -1;
}

module.exports = findFloor