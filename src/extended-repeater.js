const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  
  let string = '';
  let substring = '';

  string = str;

  if (options.addition !== undefined) {
    substring = options.addition;
    if (options.additionRepeatTimes) {
      substring += (options.additionSeparator + substring).repeat(options.additionRepeatTimes - 1);
    }
    string += substring;
  }

  if (options.repeatTimes) {
    string += (options.separator + string).repeat(options.repeatTimes - 1);
  }

  return string;
}

module.exports = {
  repeater
};
