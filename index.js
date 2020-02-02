import FactoryReqJson from "./src/FactoryReqJson";
import CopiarPropiedades from "./src/CopiarPropiedades";
import LibFecha from "./src/LibFecha";
import LibNum from "./src/LibNum";
import LibTexto from "./src/LibTexto";
import LibValidacion from "./src/LibValidacion";

const libfront = {
    FactoryReqJson,
    CopiarPropiedades,
    Fecha:LibFecha,
    Num:LibNum,
    Texto:LibTexto,
    Validacion:LibValidacion
};

export default libfront;