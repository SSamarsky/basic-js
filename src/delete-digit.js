const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let arr = Array(str.length).fill('');

  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (i !== k) {
        arr[k] += '' + str[i];
      }
    }
  }

  let arrSort = arr.sort((a, b) => a - b).reverse();

  return +arrSort[0];
}

module.exports = {
  deleteDigit
};
