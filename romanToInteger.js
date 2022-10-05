/**
 * https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */

// MCMXCIV
function romanToInt(s) {
  let romanMapInteger = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let currentNum = s[i];
    let prevNum = s[i - 1];

    if (romanMapInteger[prevNum] < romanMapInteger[currentNum]) {
      result += romanMapInteger[currentNum] - romanMapInteger[prevNum];
      i--;
    } else {
      result += romanMapInteger[currentNum];
    }
  }

  return result;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
