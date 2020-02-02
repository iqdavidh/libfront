class ObserverDataEdit {
  constructor() {
    this.subscriptores = [];
    //{nombre, fn}
    this.dataEdit = {};
    this.dataIsValid = {};

    this.modoObserver = 'edit';

    this.setModoObserverInsert = () => {
      this.modoObserver = 'insert';
    };

    /* saveData ------------------------------------------------- */
    this.cbSaveData = clienteNew => {
      console.log('no implemenado fnSaveData');
      return false;
    };

    this.registrarCbSaveData = cb => {
      this.cbSaveData = cb;
    };

    this.onRequesSaveData = () => {
      this.cbSaveData();
    };

    /* ------------------------------------------------- */
    this.cbDataIsValidChange = () => {
      console.log('no implementado fnDataVAlidChange');
      return false;
    };

    this.registrarCbDataIsValid = cb => {
      this.cbDataIsValidChange = cb;
    };

    /* mostrarWait -------------------------------------- */
    this.cbMostrarWait = isWait => {
      console.log('no implementado cbMostrarWait');
      return false;
    };
    this.registrarCbMostrarWait = cb => {
      this.cbMostrarWait = cb;
    };

    this.onMostrarWait = isWait => {
      return this.cbMostrarWait(isWait);
    };

    /* updateModel ------------------------------------- */
    this.cbUpdateModel = (iModel, dataUpdate) => {
      console.log('no implementado cbUpdateModel');
      return false;
    };
    this.registraCbUpdateModel = cb => {
      this.onUpdateModel = cb;
    };

    this.onUpdateModel = (idModel, dataUpdate) => {
      return this.cbUpdateModel(idModel, dataUpdate);
    };

    /* ------------------------------------------------- */
    this.cbDeleteModel = isWait => {
      console.log('no implementado cbDeleteModel');
      return false;
    };
    this.registraCbDeleteModel = cb => {
      this.cbDeleteModel = cb;
    };

    this.onDeleteModel = idModel => {
      return this.cbDeleteModel(idModel);
    };

    /* ------------------------------------------------- */
    this.cbInsertModel = clienteNew => {
      console.log('no implementado cbInsertModel');
      return false;
    };
    this.registraCbInsertModel = cb => {
      this.cbInsertModel = cb;
    };

    this.onInsertModel = (idModel, dataInsert) => {
      /*solicitar lodos los valores actuales*/
      let listaCamposModelo = [];
      this.subscriptores.forEach(suscriptor => {
        let campo = suscriptor.IControlDataEdit.getCampoFromDataSource();
        listaCamposModelo.push(campo);
      });

      let listaCamposConValor = Object.keys(dataInsert);

      //completamos qeu campos no vienen con un valor null
      listaCamposModelo.forEach(campo => {
        const isExiste = listaCamposConValor.find(item => {
          return item === campo;
        });

        if (!isExiste) {
          dataInsert[campo] = null;
        }
      });

      //corremos la validacion

      //vamos a actualizar los campos que no vienen

      return this.cbInsertModel(idModel, dataInsert);
    };

    /* ------------------------------------------------- */
    /* al terminar insart model */

    this.fnInserModelEnd = () => {
      console.log('no implementado fnInserModelEnd');
    };

    this.registrarFnInsertModelEnd = fn => {
      return (this.fnInserModelEnd = fn);
    };

    this.onInsertModelEnd = () => {
      this.fnInserModelEnd();
    };

    /* registro selected --------------------------------- */

    let listaHandlerOnSetRegistroSelected = [];

    this.registroSelected = null;
    this.setRegistroSelected = (nombreInvocador, clienteSelected) => {
      this.registroSelected = clienteSelected;

      listaHandlerOnSetRegistroSelected
        .filter(suscriptor => {
          return nombreInvocador !== suscriptor.nombre;
        })
        .forEach(suscriptor => {
          suscriptor.h(clienteSelected);
        });
    };

    this.registrarHandlerOnSetRegistroSelected = (nombreHandler, h) => {
      listaHandlerOnSetRegistroSelected.push({ nombre: nombreHandler, h });
    };

    /* ------------------------------------------------- */
    /* ------------------------------------------------- */
    /* controles edit ---------------------------------- */

    this.subscribe = (nombre, IControlDataEdit) => {
      //ver si esta repetido el nombre

      const indexRepetido = this.subscriptores.find(suscriptor => {
        return suscriptor.nombre === nombre;
      });

      if (indexRepetido > -1) {
        throw Error(
          `Suscribe -  ya se encuentra un listener con el nombre ${nombre}`
        );
      }

      this.subscriptores.push({
        nombre,
        IControlDataEdit
      });
    };

    this.unsuscribe = nombreSuscriptor => {
      //quitar de la lista al listener

      this.subscriptores = this.subscriptores.filter(item => {
        return item.nombre !== nombreSuscriptor;
      });
    };

    this.onSetEdit = () => {
      this.subscriptores.forEach(suscriptor => {
        suscriptor.IControlDataEdit.onSetEdit();
      });
    };

    this.onSetCancel = () => {
      this.subscriptores.forEach(suscriptor => {
        suscriptor.IControlDataEdit.onSetCancel();
      });

      this.dataEdit = {};
      this.dataIsValid = {};
    };

    this.onDataSourceChange = () => {
      this.subscriptores.forEach(suscriptor => {
        suscriptor.IControlDataEdit.onDataSourceChange();
      });
    };

    this.customValidation = (dataEdit, isValid) => {
      return isValid;
    };

    this.onValorChange = (campo, valorNew, isValid) => {
      this.dataEdit[campo] = valorNew;
      this.dataIsValid[campo] = isValid;

      let isAllValid = isValid;

      if (this.modoObserver === 'insert') {
        //verificar si todos los campos presentes nos dan valor de

        this.subscriptores
          .filter(s => {
            return s.nombre !== campo;
          })
          .forEach(suscriptor => {
            if (isAllValid) {
              //Si tenemos qeu todas las propiedades son correctas continuamos evaluando - para no evaluar de mas

              let v = suscriptor.IControlDataEdit.getIsValidCurrentValue();

              if (!v) {
                isAllValid = false;
              }
            }
          });
      } else {
        //en caso edit solo validamos los que tenemos

        Object.keys(this.dataIsValid)
          .filter(k => {
            return k;
          })
          .forEach(k => {
            if (!this.dataIsValid[k]) {
              isAllValid = false;
            }
          });
      }

      //notifica qhe hay error en validaciopn
      this.cbDataIsValidChange(isAllValid);
    };

    this.getDataEdit = () => {
      return this.dataEdit;
    };

    this.getAllDataEdit = () => {
      let data = {};

      this.subscriptores.forEach(suscriptor => {
        data[suscriptor.nombre] = suscriptor.IControlDataEdit.getValueEdit();
      });

      return data;
    };
  }
}

export default ObserverDataEdit;
