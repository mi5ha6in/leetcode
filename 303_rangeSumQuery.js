/**
 * https://leetcode.com/problems/range-sum-query-immutable/
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.prefixSum = [0];

  for (let i = 1; i <= nums.length; i++) {
    this.prefixSum.push(this.prefixSum[i - 1] + nums[i - 1]);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.prefixSum[right + 1] - this.prefixSum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // return (-2) + 0 + 3 = 1
console.log(numArray.sumRange(2, 5)); // return 3 + (-5) + 2 + (-1) = -1
console.log(numArray.sumRange(0, 5)); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
