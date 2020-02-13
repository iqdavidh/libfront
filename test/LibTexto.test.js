const {assert} = require('chai');
const LibTexto = require('../src/LibTexto.js');

describe('LibTexto ', function() {
  it('getRandomString - random a texto ', function() {

    let code = LibTexto.getRandomString(10);
    assert(code!==null && code!==undefined, 'No es correcto el random');

    let code2 = LibTexto.getRandomString(10);
    assert(code!==code2, 'El código se repite');

  });
});
