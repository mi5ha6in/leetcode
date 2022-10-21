/**
 * https://leetcode.com/problems/binary-search/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = Math.floor((r + l) / 2);
    if (target > nums[m]) {
      l = m + 1;
    } else if (target < nums[m]) {
      r = m - 1;
    } else {
      return m;
    }
  }
  return -1;
};

console.log(search((nums = [-1, 0, 3, 5, 9, 12]), (target = 9))); // 4
console.log(search((nums = [-1, 0, 3, 5, 9, 12]), (target = 2))); // -1
