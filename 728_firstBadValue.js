/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   **/
  return function (n) {
    let left = -1;
    let right = n + 1;

    while (right - left > 1) {
      let m = Math.trunc(left + right, 2);
      if (isBadVersion(m)) {
        right = m;
      } else {
        left = m;
      }
    }
    return left + 1;
  };
};
