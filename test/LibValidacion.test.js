import { assert } from 'chai';
import LibValidacion from '../src/LibValidacion';

describe('LibValidacion.isNotEmpty validar que un valor no es vacio or null', () => {
  it('isNotEmpty - el valor no puede ser vacio', () => {
    let isValid = LibValidacion.isNotEmpty('xx');
    assert(isValid, 'Se esperaba validacion true');
  });

  it('isNotEmpty - en caso de valor vacio lanza eception', () => {
    {
      let isValid = LibValidacion.isNotEmpty(null);
      assert(isValid === false, 'Se esperaba msgError al validar null');
    }

    {
      let isValid = LibValidacion.isNotEmpty('');
      assert(isValid === false, 'Se esperaba msgError al validar empty string');
    }

    {
      let isValid = LibValidacion.isNotEmpty('sss');
      assert(isValid === true, 'Se esperaba msgError al validar  string');
    }

    {
      let isValid = LibValidacion.isNotEmpty(1000);
      assert(isValid === true, 'Se esperaba msgError al validar  numero');
    }

    {
      let isValid = LibValidacion.isNotEmpty({});
      assert(isValid === true, 'Se esperaba msgError al validar  {}');
    }
  });
});

describe('isEmailValid', function() {
  it('should ok - correo .com', function() {
    let email = 'david@productividadti.com';
    assert(LibValidacion.isEmailValid(email));
  });

  it('should ok - correso .com.mx', function() {
    let email = 'david@productividadti.com.mx';
    assert(LibValidacion.isEmailValid(email));
  });

  /*Casos FALSE*/

  it('should false - sin texto', function() {
    let email = '';
    assert(!LibValidacion.isEmailValid(email));
  });

  it('should false - no mail', function() {
    let email = 'sadfas';
    assert(!LibValidacion.isEmailValid(email));
  });

  it('should false - no correct mail', function() {
    let email = 'david.com.mx';
    assert(!LibValidacion.isEmailValid(email));
  });
});
