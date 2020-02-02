import { assert } from 'chai';
import {describe} from 'mocha';
import fn from '../src/CopiarPropiedades';

describe('Solo se copian propiedades', () => {
  it('OK - simplemente se compran', () => {
    const origen = {
      a: 1,
      b: 2
    };

    const destino = {};

    fn(destino, origen, ['a', 'b']);

    assert(
      JSON.stringify(origen) === JSON.stringify(destino),
      'No se copiaron todas las propiedades'
    );
  });
});
