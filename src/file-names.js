const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = [];
  for (let i = 0; i < names.length; i++) {
    let isElem = res.find(el => el === names[i]);
    if (!isElem) res.push(names[i]);
    else {
      let count = 1;
      let renameEl = names[i] + '(' + count + ')';
      while (res.find(el => el === renameEl) !== undefined) {
        count++;
        renameEl = names[i] + '(' + count + ')';
      }
      res.push(renameEl);
    }
  }

  return res;
}

module.exports = {
  renameFiles
};
