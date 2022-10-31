/**
 * https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits = digits.reverse();
  let one = 1;
  let i = 0;

  while (one) {
    if (i < digits.length) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i] += 1;
        one = 0;
      }
    } else {
      digits.push(1);
      one = 0;
    }
    i++;
  }
  return digits.reverse();
};

console.log(plusOne((digits = [1, 2, 3]))); // digits = [1,2,4]
console.log(plusOne((digits = [4, 3, 2, 1]))); // digits = [4,3,2,2]
console.log(plusOne((digits = [9]))); // digits = [1, 0]
