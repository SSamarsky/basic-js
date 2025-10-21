const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _chain: [],

  getLength() {
   return this._chain.length;
  },

  addLink(value = undefined) {
    if (value !== undefined) {
      this._chain.push(`( ${value} )`);
    } else {
      this._chain.push(`( )`);
    }
    
    return chainMaker;
  },

  removeLink(position) {
    if (typeof position !== 'number'|| position % 1 !== 0 || position > this._chain.length || position < 1 || isNaN(position)) {
      this._chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    let arr = [];
    for (let i = 0; i < this._chain.length; i++) {
      if (position - 1 !== i) arr.push(this._chain[i]);
    }
    this._chain = arr;
    return chainMaker;
  },

  reverseChain() {
    this._chain.reverse();
    return chainMaker;
  },

  finishChain() {
    let res = [... this._chain].join('~~');
    this._chain = [];
    return res;
  }
};

module.exports = {
  chainMaker,
};
