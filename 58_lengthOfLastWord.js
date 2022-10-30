/**
 * https://leetcode.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

console.log(lengthOfLastWord((s = "Hello World"))); // 5
console.log(lengthOfLastWord((s = "   fly me   to   the     moon  "))); // 4
