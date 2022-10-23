/**
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

var nextGreatestLetter = function (letters, target) {
  let l = -1;
  let r = letters.length;

  while (r - l > 1) {
    let m = Math.trunc((r + l) / 2);
    if (letters[m] > target) {
      r = m;
    } else {
      l = m;
    }
  }
  return r === letters.length ? letters[0] : letters[r];
};
console.log(nextGreatestLetter((letters = ["c", "f", "j"]), (target = "a"))); // "c"
console.log(
  nextGreatestLetter((letters = ["x", "x", "y", "y"]), (target = "z"))
); // "x"
console.log(nextGreatestLetter((letters = ["c", "f", "j"]), (target = "c"))); // "f"
