/**
 * https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};

console.log(arrayStringsAreEqual((word1 = ["ab", "c"]), (word2 = ["a", "bc"]))); // true
console.log(arrayStringsAreEqual((word1 = ["a", "cb"]), (word2 = ["ab", "c"]))); // false
