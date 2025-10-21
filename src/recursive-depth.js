const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) return 1;

    let arrRes = [];
    let str = JSON.stringify(arr);
    let count = 0;
    let isOpen = true;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '[') {
        count++;
        if (!isOpen) {
          isOpen = true;
        }
      } else if (str[i] === ']') {
        if (isOpen) {
          arrRes.push(count);
        }
        count--;
        isOpen = false;
      }
    }

    return Math.max(...arrRes);
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
