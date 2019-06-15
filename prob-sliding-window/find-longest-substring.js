// add whatever parameters you deem necessary
function findLongestSubstring(str) {
  let longest = 0;
  let start = 0;
  let seen = {};

  for(let i = 0; i < str.length; i++){
    if(seen[str[i]] !== undefined){
      longest = Math.max(longest, i - start);
      start = seen[str[i]] + 1;
      i = seen[str[i]];
      seen = {};
    } else if(i === str.length - 1){
      longest = Math.max(longest, i - start + 1);
    } else {
      seen[str[i]] = i;
    }
  }

  return longest;
}

module.exports = findLongestSubstring;
