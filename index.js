const CopiarPropiedades = require("./src/CopiarPropiedades");
const FactoryReqJson = require("./src/FactoryReqJson");
const LibFecha = require("./src/LibFecha");
const LibNum = require("./src/LibNum");
const LibTexto = require("./src/LibTexto");
const LibValidacion = require("./src/LibValidacion");

const libfront = {
    CopiarPropiedades,
    FactoryReqJson,
    Fecha: LibFecha,
    Num: LibNum,
    Texto: LibTexto,
    Validacion: LibValidacion
};

module.exports = libfront;