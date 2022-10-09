/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  const getSumFromOneToN = (n) => Math.round((n * (n + 1)) / 2);

  let sum = getSumFromOneToN(nums.length);

  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
  }

  return sum;
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
