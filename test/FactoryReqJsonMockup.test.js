const {assert} = require('chai');
const FactoryReqJson = require('../src/FactoryReqJson');

/*
 * La libreria para hacer todas las lalmdas http REST , usamos await async
 * */

const reqJson = FactoryReqJson();

reqJson.setIsDebug(true);

/* Habilitar Modo Mockup*/
reqJson.mockup.start("D:\\App\\npm\\libfront-iqdavid\\test\\respuestasMockup");


reqJson.mockup.start("D:\\App\\npm\\libfront-iqdavid\\test\\respuestasMockup");


describe('LibAsyncReqJson  Con Modo Mockup ', function () {
  
  it('requestGET', async () => {
    let url = 'https://reqres.in/api/users/1';
    
    let respuesta = await reqJson.requestGET(url);
    
    assert(typeof respuesta === 'object', 'no se recibio una respueesta correcta'    );
  
  
    let respuesta2 = await reqJson.requestGET(url);
    
  });
  
});
