function bubbleSort(arr) {
  let i = 0;
  let j = arr.length;

  while (i < j) {
    if (arr[i] > arr[i + 1]) {
      [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
    }
    i += 1;

    if(i === j){
      i = 0;
      j -= 1;
    }
  }

  return arr;
}

module.exports = bubbleSort;