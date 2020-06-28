#FactoryReqJson

####1.3.1
Agregado mecanimso para guardar las respuestas para sesiones mockup


####1.3
Agregado propiedad startMockup que permite trabajar 
en modo test haciendo mockup de los request

```
reqJson.registrarRespuestaMockUp(
  {
    data: "yea",    
  },
  "post",
  "https://reqres.in/api/users");

reqJson.startMockup();
```

####1.2.5
fnHeader puder ser async  2020-05-20

## Uso
Es un factory para un objeto qeu hace request a api

```
fnHeader=()=>{
  return {
    "x-rapidapi-host":'bravenewcoin-v1.p.rapidapi.com',
    "x-rapidapi-key": 'c6f54aeb94msh523c3970f98d988p10f941jsn97fbb003c8cf'
  }
};


const ApiBraveNewIcon= FactoryReqJson(fnHeader);

ApiBraveNewIcon.setIsDebug(false)

const respuesta= await ApiBraveNewIcon.requestGET('https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=btc');


```

##LibFecha

```
    const fnew = LibFecha.getFechaFromTS(1582757161 * 1000);
    respuesta '26/02/2020' 
```