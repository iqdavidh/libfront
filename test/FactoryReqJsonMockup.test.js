const {assert} = require('chai');
const FactoryReqJson = require('../src/FactoryReqJson');

/*
 * La libreria para hacer todas las lalmdas http REST , usamos await async
 * */

const reqJson = FactoryReqJson();

/* Habilitar Modo Mockup*/
reqJson.registrarRespuestaMockUp(
  {
    data: "ok",
    target: "https://reqres.in/api/users/1"
  },
  "get",
  "https://reqres.in/api/users/1");

reqJson.registrarRespuestaMockUp(
  {
    data: "yea",
    target: "https://reqres.in/api/users"
  },
  "post",
  "https://reqres.in/api/users");


reqJson.startMockup();

const debug = 1;

describe('LibAsyncReqJson  Con Modo Mockup ', function () {
  
  it('requestGET', async () => {
    let url = 'https://reqres.in/api/users/1';
    
    let respuesta = await reqJson.requestGET(url);
    
    assert(
      typeof respuesta === 'object',
      'no se recibio una respueesta correcta'
    );
    assert(respuesta.data === 'ok', 'El dato userID no viene');
    
    
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
    assert(respuestaPost.data === "yea", 'El dato ubody no se paso');

    
  });
  

});
