const {assert} = require('chai');
const LibNum = require('../src/LibNum.js');

describe('LibNum ', function() {
  it('getRandom - random a partir de un min a un max', function() {
    let n = LibNum.getRandom(100);
    assert(n >= 1 && n <= 100, 'No es correcto el random');

    n = LibNum.getRandom(2);

    assert(n === 1 || n === 2, 'No  es corecto el random, debe ser 1 o 2');
  });
});
