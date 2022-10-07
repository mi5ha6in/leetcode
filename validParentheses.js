/**
 * @param {string} s
 * @return {boolean}
 */
function isValidParentheses(s) {
  const parentheses = [];
  const hashMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] in hashMap) {
      parentheses.push(s[i]);
    } else {
      if (hashMap[parentheses.pop()] !== s[i]) {
        return false;
      }
    }
  }

  return parentheses.length === 0;
}

console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false