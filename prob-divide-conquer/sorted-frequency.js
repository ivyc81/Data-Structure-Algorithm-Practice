function sortedFrequency(arr, targetNum) {
  const start = arr[0] === targetNum ? 0 : findSmaller(arr, targetNum);
  const end = arr[arr.length - 1] === targetNum ? arr.length : findLarger(arr, targetNum);

  if(end === -1 || start === -1){
    return -1;
  }
  return end - start;
}

function findSmaller(arr, targetNum){
  let start = 0;
  let end = arr.length - 1;

  while(end >= start){
    let mid = Math.floor((end + start) / 2);
    if(arr[mid] === targetNum && arr[mid - 1] < arr[mid]){
      return mid;
    } else if (arr[mid] >= targetNum){
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

function findLarger(arr, targetNum){
  let start = 0;
  let end = arr.length - 1;

  while(end >= start){
    let mid = Math.floor((end + start) / 2);
    if(arr[mid] === targetNum && arr[mid + 1] > arr[mid]){
      return mid + 1;
    } else if (arr[mid] > targetNum){
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

module.exports = sortedFrequency