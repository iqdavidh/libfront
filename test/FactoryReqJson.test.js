import { assert } from 'chai';
import FactoryReqJson from '../src/FactoryReqJson';

/*
 * La libreria para hacer todas las lalmdas http REST , usamos await async
 * */

const reqJson = new FactoryReqJson();

describe('LibAsyncReqJson  ', function() {
  it('requestGET', async () => {
    let url = 'https://jsonplaceholder.typicode.com/todos/1';

    let respuesta = await reqJson.requestGET(url);

    assert(
      typeof respuesta === 'object',
      'no se recibio una respueesta correcta'
    );
    assert(respuesta.userId.toString() === '1', 'El dato userID no viene');
  });

  it('requestPOST', async () => {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    const dataPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    let respuestaPost = await reqJson.requestPOST(url, dataPost);

    assert(
      typeof respuestaPost === 'object',
      'no se recibio una respueesta correcta'
    );
    assert(respuestaPost.body === dataPost.body, 'El dato ubody no se paso');
  });

  it('requestDELETE', async () => {
    let url = 'https://jsonplaceholder.typicode.com/todos/1';

    let respuesta = await reqJson.requestDELETE(url);

    assert(
      typeof respuesta === 'object',
      'no se recibio una respueesta correcta'
    );
  });
});
