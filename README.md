#FactoryReqJson

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