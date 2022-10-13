/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  let i = 0;
  while (i < nums.length) {
    let rightPos = nums[i] - 1;
    if (nums[i] !== nums[rightPos]) {
      [nums[rightPos], nums[i]] = [nums[i], nums[rightPos]];
    } else {
      i++;
    }
  }
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      answer.push(i + 1);
    }
  }
  return answer;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])) // [5, 6]
console.log(findDisappearedNumbers([1,1])) // [2]