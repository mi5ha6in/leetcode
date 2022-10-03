/**
 * https://leetcode.com/problems/two-sum/
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function (numbers, target) {
  const hashMap = {};

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (Object.hasOwn(hashMap, complement)) {
      return [i, hashMap[complement]];
    }

    hashMap[numbers[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1] || [1, 0]
console.log(twoSum([3, 2, 4], 6)); // [1,2] || [2, 1]
console.log(twoSum([3, 3], 6)); // [0, 1] || [1, 0]
