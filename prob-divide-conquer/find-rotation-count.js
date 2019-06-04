function findRotationCount(arr) {
  let start = 0;
  let end = arr.length - 1;

  while(end >= start){
    let mid = Math.floor((end + start) / 2);
    if(arr[mid] < arr[mid - 1]){
      return mid;
    } else if(arr[mid] >= arr[start]){
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return 0;
}

module.exports = findRotationCount