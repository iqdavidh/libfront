const LibValidacion = {
    isNotEmpty: valor => {
        if (valor === null || valor === undefined) {
            return false;
        }

        if (typeof valor === 'string') {
            if (valor.toString().trim() === '') {
                return false;
            }
        }

        return true;
    },
    isEmailValid: email => {
        /*https://tylermcginnis.com/validate-email-address-javascript/*/

        if (email === null || email === undefined) {
            return false;
        }

        if (typeof email !== 'string') {
            return false;
        }

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    objectTieneProp: (model, listaProp) => {
        let isValid = true;

        let msgError = '';

        listaProp.forEach(p => {
            let isPropValid = LibValidacion.isNotEmpty(model[p]);

            if (!isPropValid) {
                isValid = false;
                msgError += msgError === '' ? '' : ', ';
                msgError += p;
            }
        });

        if (isValid === true) {
            return true;
        }
        return msgError;
    }
};

module.exports =  LibValidacion;
