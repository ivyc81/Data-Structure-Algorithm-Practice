function findRotatedIndex(arr, target) {
  const pivot = findPivot(arr);
  if(target >= arr[0] && target <= arr[pivot - 1]){
    return binarySearch(0, pivot - 1, arr, target);
  } else if(target >= arr[pivot] && target <= arr[arr.length - 1]){
    return binarySearch(pivot, arr.length - 1, arr, target);
  } else {
    return -1;
  }
}

function findPivot(arr, start = 0, end = arr.length){
  if(end < start){
    return 0;
  }

  const mid = Math.floor((end + start) / 2);
  if(arr[mid] > arr[mid + 1]){
    return mid + 1;
  } else if(arr[mid] < arr[start]){
    return findPivot(arr, start, mid);
  } else {
    return findPivot(arr, mid, end);
  }
}

function binarySearch(start = 0, end = arr.length, arr, target){
  if(end < start){
    return -1;
  }

  const mid = Math.floor((end + start) / 2);
  if(target === arr[mid]){
    return mid;
  } else if(target < arr[mid]){
    return binarySearch(start, mid - 1, arr, target);
  } else {
    return binarySearch(mid + 1, end, arr, target);
  }
}

module.exports = findRotatedIndex