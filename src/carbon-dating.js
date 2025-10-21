const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  
  let act = Number(sampleActivity);
  if (isNaN(act)) return false;
  if (act > 15 || act <= 0) return false;

  let A = Math.log(MODERN_ACTIVITY / act);
  let K = 0.693 / HALF_LIFE_PERIOD;
  let age = Math.ceil(A / K);

  return age;
}

module.exports = {
  dateSample
};
