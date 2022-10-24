/**
 * https://leetcode.com/problems/summary-ranges/
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (!nums || nums.length === 0) return [];
  const ranges = [];
  let start = nums[0];
  let end = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== end + 1) {
      pushToRange(start, end, ranges);
      start = nums[i];
    }
    end = nums[i];
  }
  pushToRange(start, end, ranges);
  return ranges;
};

function pushToRange(start, end, ranges) {
  if (start !== end) {
    ranges.push(`${start}->${end}`);
  } else {
    ranges.push(start.toString());
  }
}

console.log(summaryRanges(nums = [0,1,2,4,5,7])) // ["0->2","4->5","7"]