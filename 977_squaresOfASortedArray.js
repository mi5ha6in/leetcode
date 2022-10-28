/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let res = [];

  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    if (nums[l] * nums[l] > nums[r] * nums[r]) {
      res.push(nums[l] * nums[l]);
      l++;
    } else {
      res.push(nums[r] * nums[r]);
      r--;
    }
  }
  return res.reverse();
};

console.log(sortedSquares((nums = [-4, -1, 0, 3, 10]))); // [0,1,9,16,100]
console.log(sortedSquares((nums = [-7, -3, 2, 3, 11]))); // [4,9,9,49,121]
