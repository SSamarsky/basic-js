const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let obj = domains.reduce((acc, el) => {
    let arr = el.split('.').reverse();

    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1]) {
        arr[i] = '.' + arr[i];
        arr[i] = arr[i - 1] + arr[i];
      } else {
        arr[i] = '.' + arr[i];
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (!acc.hasOwnProperty(arr[i])) acc[arr[i]] = 1;
      else acc[arr[i]] += 1;
    }

    return acc;
  }, {});

  return obj;
}

module.exports = {
  getDNSStats
};
