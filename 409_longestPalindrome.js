/**
 * https://leetcode.com/problems/longest-palindrome/
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const hashMap = {};

  for (let i = 0; i < s.length; i++) {
    hashMap[s[i]] = (hashMap[s[i]] || 0) + 1;
  }

  let count = 0;
  for (let symbol in hashMap) {
    if (hashMap[symbol] % 2 === 0) {
      count += hashMap[symbol];
    } else {
      count += hashMap[symbol] - 1;
    }
  }

  return s.length > count ? count + 1 : count;
};

console.log(longestPalindrome((s = "abccccdd"))); // 7
