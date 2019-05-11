/** dump: given a string,
 * return if the string is “balanced”. */

function dump(arr, currString = '', i = 0) {
  if (i === arr.length) {
    return currString;
  }

  const currVal = arr[i];
  if (Array.isArray(currVal)) {
    return dump(arr, currString + dump(currVal, '', 0), i += 1);
  } else {
    return dump(arr, currString + arr[i], i += 1);
  }

}

function validate(arr, valid = true, i = 0) {
  if(!valid){
    return false;
  }

  if(arr <= 1){
    return valid;
  }

  if(arr.length !== 4){
    return false;
  }

  if(i === arr.length){
    return valid;
  }

  const currVal = arr[i];
  if(Array.isArray(currVal)){
    valid = validate(currVal, true, 0);
  } else if(currVal > 1){
    valid =  false;
  }

  return validate(arr, valid, i += 1);
}

function simplify(arr) {
  if(!Array.isArray(arr)){
    return arr;
  }

  arr.forEach((e, i, a) => a[i] = simplify(e));
  const curr = arr[0];
  return arr.every(e => e === curr) ? curr : arr;
}

module.exports = {
  dump,
  validate,
  simplify,
};

