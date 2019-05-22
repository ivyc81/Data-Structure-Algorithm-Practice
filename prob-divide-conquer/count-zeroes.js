function countZeroes(arr) {
  if(arr[arr.length - 1] === 1){
    return 0;
  }
  if(arr[0] === 0){
    return arr.length;
  }

  const idx = findFirstZero(arr);
  return arr.length - idx;
}

function findFirstZero(arr){
  let idx = Math.floor(arr.length / 2);
  let start = 0;
  let end = arr.length;

  while(end > start){
    if(arr[idx] === 0 && arr[idx - 1] === 1){
      break;
    } else if (arr[idx] === 0){
      end = idx - 1;
    } else {
      start = idx + 1;
    }

    idx = start + Math.floor((end - start)/2);
  }

  return idx;
}

module.exports = countZeroes