const copiarPropiedades = (objetoDestino, objetoOrigen, listaProp) => {
  Object.keys(objetoOrigen).forEach(p => {
    objetoDestino[p] = objetoOrigen[p];
  });
};

module.exports = copiarPropiedades;
