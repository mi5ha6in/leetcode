/**
 * https://leetcode.com/problems/find-pivot-index/
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sumNums = nums.reduce((sum, currentNum) => {
    return sum + currentNum;
  });

  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sumNums - leftSum - nums[i] === leftSum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0
