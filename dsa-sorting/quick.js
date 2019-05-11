function pivot(arr, f = (a, b) => a - b, start = 0, end = arr.length) {
  let pivotPoint = start;
  let val1 = arr[pivotPoint];

  for(let i = start + 1; i < end; i++) {
    let val2 = arr[i];

    if(f(val2, val1) < 0) {
      [arr[i], arr[pivotPoint + 1]] = [arr[pivotPoint + 1], arr[i]];
      [arr[pivotPoint], arr[pivotPoint + 1]] = [arr[pivotPoint + 1], arr[pivotPoint]];
      pivotPoint += 1;
    }
  }

  return pivotPoint;
}

function quickSort(arr, start = 0, end = arr.length, f = (a, b) => a - b) {

  if(start >= end) {
    return arr;
  }

  const mid = pivot(arr, f, start, end);
  quickSort(arr, start, mid, f);
  quickSort(arr, mid + 1, end, f);

  return arr;
}

module.exports = { pivot, quickSort };