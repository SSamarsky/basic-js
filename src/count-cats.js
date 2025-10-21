const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce((acc, el) => {
    for (let i = 0; i < el.length; i++) {
      if (el[i] === '^^') acc += 1;
    }
    return acc;
  }, 0);
}

module.exports = {
  countCats
};
