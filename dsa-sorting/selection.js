function selectionSort(arr, start = 0) {
    if(start === arr.length){
        return arr;
    }

    let min = arr[start];
    let j = start;

    for(let i = start; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            j = i;
        }
    }

    [arr[start], arr[j]] = [arr[j], arr[start]];

    return selectionSort(arr, start + 1);
}

module.exports = selectionSort;