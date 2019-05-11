function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j -= 1;
    }
  }

  return arr;
}

module.exports = insertionSort;