/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    answer ^= nums[i];
  }

  return answer;
}

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
