const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const arrFirstLetter = members.reduce((acc, el) => {
    if (typeof el === 'string') {
      let elem = el.trim();
      acc.push(elem[0].toUpperCase());
    }
    return acc;
  }, []);

  return arrFirstLetter.length === 0 ? false : arrFirstLetter.sort().join('');
}

module.exports = {
  createDreamTeam
};
