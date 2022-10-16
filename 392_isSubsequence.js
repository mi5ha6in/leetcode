/**
 * https://leetcode.com/problems/is-subsequence/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
  let pointerS = 0;
  let pointerT = 0;

  while (pointerS < s.length && pointerT < t.length) {
    if (s[pointerS] === t[pointerT]) {
      pointerS++;
    }

    pointerT++;
  }

  return pointerS === s.length;
}

console.log(isSubsequence((s = "abc"), (t = "ahbgdc"))); //true
console.log(isSubsequence((s = "axc"), (t = "ahbgdc"))); //false
