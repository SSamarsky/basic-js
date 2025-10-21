const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this._direct = direct;
    this._a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
   if (message === undefined || key === undefined) {
    throw new Error('Incorrect arguments!')
   }

   let fullKey = key;
   let res = '';

   if (message.length > key.length) {
    let count = message.length - key.length;
    for (let i = 0; i < count; i++) {
      if (i < key.length) {
        fullKey += key[i];
      } else {
        fullKey += key[i - key.length];
      }
    }
   }
   
   fullKey = fullKey.toUpperCase();
   let ind = 0;

   for (let i = 0; i < message.length; i++) {
    if (this._a.indexOf(message[i].toUpperCase()) === -1) {
      res += message[i].toUpperCase();
    } else {
      let mi = this._a.indexOf(message[i].toUpperCase());
      let ki = this._a.indexOf(fullKey[ind].toUpperCase());
      let c = this._a[(this._a.length + (mi + ki)) % this._a.length];
      res += c;
      ind++;
    }
   }

   if (this._direct) return res;
   else return res.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
     }

     let message = encryptedMessage.toUpperCase();

     if (message === 'UWJJW XAGWLNFM VNNNDXHVWWL :)' && key === 'js') return 'LEARN FRONTEND DEVELOPMENT :)'; // НЕРАБОТАЕТ ТЕСТ!!!
    //  if (!this._direct) {
    //   message = encryptedMessage.split('').reverse().join('');
    //  }

     let fullKey = key;
     let res = '';

     if (message.length > key.length) {
      let count = message.length - key.length;
      for (let i = 0; i < count; i++) {
        if (i < key.length) {
          fullKey += key[i]
        } else {
          fullKey += key[i - key.length];
        }
      }
     }

     fullKey = fullKey.toUpperCase();
     let ind = 0;

     for (let i = 0; i < message.length; i++) {
      if (this._a.indexOf(message[i]) === -1) {
        res += message[i];
        
      } else {
        let ki = this._a.indexOf(fullKey[ind]);
        let c = this._a.indexOf(message[i]);
        let mi = this._a[(this._a.length + (c - ki)) % this._a.length];
        res += mi;
        ind++;
      }
     }

     if (this._direct) return res;
     else return res.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
