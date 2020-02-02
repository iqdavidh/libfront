import AObserver from "./AObserver";

class Singleton extends AObserver{
}

const evento_onWindowsRezise = 'evento_onWindowsRezise';

const observer = new Singleton();

const factoryListiner = (nombreEvento) => {


  return {
    subscribir(nombre, handler) {
      observer.subscribir(nombreEvento, nombre, handler);
    },
    raise(param, nombreSubsAExcluir) {
      observer.raise(nombreEvento, nombreSubsAExcluir, param)
    }
  };
};


const ObserverWindowH ={
  onWindowsRezise : factoryListiner(evento_onWindowsRezise)
};

export default ObserverWindowH;
