/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const hashMapST = {};
  const hashMapTS = {};

  for (let i = 0; i < s.length; i++) {
    let symbolS = s[i];
    let symbolT = t[i];

    if (
      (hashMapST[symbolS] && hashMapST[symbolS] !== symbolT) ||
      (hashMapTS[symbolT] && hashMapTS[symbolT] !== symbolS)
    ) {
      return false;
    }

    hashMapST[symbolS] = symbolT;
    hashMapTS[symbolT] = symbolS;
  }

  return true;
};

console.log(isIsomorphic((s = "egg"), (t = "add"))); // true
console.log(isIsomorphic((s = "foo"), (t = "bar"))); // false
console.log(isIsomorphic((s = "bar"), (t = "foo"))); // false
console.log(isIsomorphic((s = "paper"), (t = "title"))); // true
