const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let arr = Array(matrix[0].length).fill(1);

  for (const el of matrix) {
    for (let i = 0; i < el.length; i++) {
      if (el[i] === 0) {
        arr[i] = 0;
      } else if (el[i] !== 0 && arr[i] !== 0) {
        sum += el[i];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
