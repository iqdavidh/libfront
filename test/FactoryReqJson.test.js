const {assert} = require('chai');
const FactoryReqJson = require('../src/FactoryReqJson');

/*
 * La libreria para hacer todas las lalmdas http REST , usamos await async
 * */

const reqJson = FactoryReqJson();

const debug = 1;

describe('LibAsyncReqJson  ', function () {

  it('requestGET', async () => {
    let url = 'https://reqres.in/api/users/1';

    let respuesta = await reqJson.requestGET(url);

    assert(
      typeof respuesta === 'object',
      'no se recibio una respueesta correcta'
    );
    assert(respuesta.data.id.toString() === '1', 'El dato userID no viene');


  });

  it('requestPOST', async () => {
    let url = 'https://reqres.in/api/users';
    const dataPost = {
      "name": "morpheus",
      "job": "leader"
    };

    let respuestaPost = await reqJson.requestPOST(url, dataPost);

    assert(
      typeof respuestaPost === 'object',
      'no se recibio una respueesta correcta'
    );
    assert(respuestaPost.name === dataPost.name, 'El dato ubody no se paso');


  });

  it('requestDELETE', async () => {
    let url = 'https://reqres.in/api/users';

    let respuesta = await reqJson.requestDELETE(url);

    assert(
      respuesta === '',
      'no se recibio una respueesta correcta'
    );

  });
});
