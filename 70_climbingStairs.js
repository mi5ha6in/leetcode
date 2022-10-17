/**
 * https://leetcode.com/problems/climbing-stairs
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  let prev = 1;
  let current = 1;

  for (let i = 0; i < n - 1; i++) {
    const temp = current;
    current = current + prev;
    prev = temp;
  }

  return current;
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8
