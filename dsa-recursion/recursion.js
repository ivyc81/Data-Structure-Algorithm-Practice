/** product: calculate the product of an array of numbers. */

function product(nums, currProduct = 1, i = 0) {
  if(i === nums.length){
    return currProduct;
  }

  return product(nums, currProduct * nums[i], i+= 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, max = 0, i = 0) {
  if(i === words.length){
    return max;
  }

  return longest(words, Math.max(words[i].length, max), i += 1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, currStr = '', i = 0) {
  if(i >= str.length){
    return currStr;
  }

  return everyOther(str, currStr + str[i], i += 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, currStr = '', i = 0) {
  if(i === str.length){
    return str === currStr;
  }

  return isPalindrome(str, str[i] + currStr, i+= 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if(arr[i] === val){
    return i;
  }

  if(i === arr.length){
    return -1;
  }

  return findIndex(arr, val, i += 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, currStr = '', i = 0) {
  if(i === str.length){
    return currStr;
  }

  return revString(str, str[i] + currStr, i += 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = [], i = 0) {
  if(i === Object.keys(obj).length){
    return arr;
  }

  let currVal = obj[Object.keys(obj)[i]];

  if(currVal instanceof Object){
    return gatherStrings(obj, arr.concat(gatherStrings(currVal, [], 0)), i += 1);
  } else if(typeof(currVal) === "string"){
    arr.push(currVal);
    return gatherStrings(obj, arr, i += 1);
  } else {
    return gatherStrings(obj, arr, i += 1);
  }
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i = 0, j = arr.length) {
  const mid = Math.floor((j + i)/ 2);
  if(arr[mid] === val){
    return mid;
  }

  if(j - i === 1){
    return -1;
  }

  if(val > arr[mid]){
    return binarySearch(arr, val, mid, j);
  } else {
    return binarySearch(arr, val, i, mid);
  }
}

/** balancedBrakets: given a string,
 * return if the string is “balanced”. */

function balancedBrakets(str, currStack = [], i = 0){
  if(i === str.length && currStack.length === 0){
    return true;
  }

  if(i === str.length && currStack.length !== 0){
    return false;
  }

  const brackets = {'{':'}', '(': ')', '[': ']'};

  if(brackets[str[i]]){
    currStack.push(str[i]);
  } else if(str[i] === brackets[currStack[currStack.length - 1]]){
    currStack.pop();
  }
  return balancedBrakets(str, currStack, i += 1);
}



module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  balancedBrakets,
};
