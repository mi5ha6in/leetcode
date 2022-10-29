/**
 * https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  let k = 0;
  let i = 0;

  for (; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
console.log(removeElement((nums = [3, 2, 2, 3]), (val = 3))); // 2, nums = [2,2,_,_]
console.log(removeElement((nums = [0, 1, 2, 2, 3, 0, 4, 2]), (val = 2))); // 5, nums = [0,1,4,0,3,_,_,_]
