class AObserver {
  constructor() {
    this.subscriptores = [];
    //{nombre, fn}
  }

  subscribir(evento, nombreSubscriptor, handler) {
    //ver si esta repetido el nombre


    if (this.subscriptores[evento] === undefined) {
      this.subscriptores[evento] = [];
    }

    const indexRepetido = this.subscriptores[evento].find(suscriptor => {
      return suscriptor.nombre === nombreSubscriptor;
    });

    if (indexRepetido > -1) {
      throw Error(
          `Suscribe -  ya se encuentra un listener con el nombre ${nombre}`
      );
    }

    this.subscriptores[evento].push({
      nombre:nombreSubscriptor,
      handler
    });
  }

  desuscribir(evento, nombreSuscriptor) {
    //quitar de la lista al listener

    this.subscriptores[evento] = this.subscriptores[evento].filter(item => {
      return item.nombre !== nombreSuscriptor;
    });
  }

  getListaSubscriptores(evento) {
    return this.subscriptores[evento];
  }

  raise(evento, nombreSubsAExcluir, param) {


    let listaSubscriptores = this.getListaSubscriptores(evento);

    if (!listaSubscriptores) {
      return;
    }

    let listaHandler = listaSubscriptores
        .filter(s => {
          return s.nombre !== nombreSubsAExcluir
        })
        .map(suscriptor => {
          return suscriptor.handler;
        })
    ;

    listaHandler.forEach(handler => {
      handler(param);
    });

  }


}

export default AObserver;
