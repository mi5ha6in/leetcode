/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let counts = [1, 1, 2];

  for (let i = 3; i <= n; i++) {
    counts.push(counts[i - 1] + counts[i - 2]);
  }

  return counts[n];
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8
