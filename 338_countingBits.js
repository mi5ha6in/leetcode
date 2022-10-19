/**
 * https://leetcode.com/problems/counting-bits/
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let dp = [0];
  let i = 0;
  let b = 1;

  while (b <= n) {
    while (i < b && i + b <= n) {
      dp[i + b] = dp[i] + 1;
      i++;
    }
    i = 0;
    b = b << 1;
  }

  return dp;
};

console.log(countBits(2)); //[0,1,1]
console.log(countBits(5)); //[0,1,1,2,1,2]
