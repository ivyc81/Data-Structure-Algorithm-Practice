function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let sorted = [];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            sorted.push(arr1[i]);
            i += 1;
        } else {
            sorted.push(arr2[j]);
            j += 1;
        }
    }

    sorted = i >= arr1.length ? sorted.concat(arr2.slice(j)) : sorted.concat(arr1.slice(i));

    return sorted;
}

function mergeSort(arr) {
    if(arr.length <= 1){
        return arr;
    }

    const mid = Math.max(arr.length / 2);
    const arr1 = arr.slice(0, mid);
    const arr2 = arr.slice(mid);

    return merge(mergeSort(arr1), mergeSort(arr2));
}

module.exports = { merge, mergeSort };