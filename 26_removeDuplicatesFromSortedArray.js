/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 1;
  for (let right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left += 1;
    }
  }
  return left;
};

console.log(removeDuplicates((nums = [1, 1, 2]))); // 2
console.log(removeDuplicates((nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))); // 5
