/**
 * https://leetcode.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = -1;
  let right = nums.length;

  while (right - left > 1) {
    let m = Math.floor((right + left) / 2);
    if (nums[m] >= target) {
      right = m;
    } else {
      left = m;
    }
  }

  return right;
};

console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 5))); // 2
console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 2))); // 1
console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 7))); // 4
