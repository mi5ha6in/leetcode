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

  for (let i = 0; i < s.length; i++) {
    let currentNum = s[i];
    let nextNum = s[i + 1];

    if (romanMapInteger[currentNum] < romanMapInteger[nextNum]) {
      result -= romanMapInteger[currentNum];
    } else {
      result += romanMapInteger[currentNum];
    }
  }

  return result;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
