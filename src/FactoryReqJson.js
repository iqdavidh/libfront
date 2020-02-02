import axios from 'axios';

const FactoryReqJson = (factoryHeader = null) => {
    let isDebug = true;
    let pathLogRequest = null;

    const consoleIfDebug = data => {
        if (isDebug) {
            console.log(data);
        }
    };

    const logRequest = (data, nameData, url) => {
        if (pathLogRequest) {
            //TODO crear un log
        }
    };

    const customHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };

    return {
        setIsDebug: () => {
            isDebug = true;
        },
        setModoLogResquest: pathToDirLog => {
            pathLogRequest = pathToDirLog;
        },
        handleCatchError: (error, url) => {
            consoleIfDebug(error.response);
            logRequest(error.response, 'error', url);

            if (error.response && typeof error.response.data !== 'undefined') {
                return error.response.data;
            }

            return {
                success: false,
                msg: error
            };
        },

        requestGET: async (url, paramHeader) => {

            consoleIfDebug(url);
            logRequest({url}, 'request', url);

            let facHeaders = {};

            if (typeof factoryHeader === 'function') {
                facHeaders = factoryHeader();
            }
            let headers = {...paramHeader, ...customHeaders, ...facHeaders};

            try {
                return await axios
                    .get(url, {headers})
                    .then(function (response) {
                        consoleIfDebug(response);
                        logRequest(response, 'response', url);
                        return response.data;
                    })
                    .catch(function (error) {
                        return handleCatchError(error, url);
                    });
            } catch (error) {
                return handleCatchError(error, url);
            }
        },

        requestPOST: async (url, dataObject, paramHeader) => {
            consoleIfDebug(url);

            const dataObjectForLog = {...dataObject, ...paramHeader, url};
            logRequest(dataObjectForLog, 'request', url);

            let facHeaders = {};
            if (typeof factoryHeader === 'function') {
                facHeaders = factoryHeader();
            }
            let headers = {...paramHeader, ...customHeaders, ...facHeaders};

            try {
                return await axios
                    .post(url, dataObject, {headers})
                    .then(function (response) {
                        consoleIfDebug(response);
                        logRequest(response, 'response', url);
                        return response.data;
                    })
                    .catch(function (error) {
                        return handleCatchError(error, url);
                    });
            } catch (error) {
                return handleCatchError(error, url);
            }
        },

        requestDELETE: async (url, paramHeader) => {

            consoleIfDebug(url);
            logRequest({url}, 'request', url);

            let facHeaders = {};
            if (typeof factoryHeader === 'function') {
                facHeaders = factoryHeader();
            }
            let headers = {...paramHeader, ...customHeaders, ...facHeaders};

            try {
                return await axios
                    .delete(url, headers)
                    .then(function (response) {
                        consoleIfDebug(response);
                        logRequest(response, 'response', url);

                        return response.data;
                    })
                    .catch(function (error) {
                        return handleCatchError(error, url);
                    });
            } catch (error) {
                return handleCatchError(error, url);
            }
        },

        requestPUTFile: async (url, objectFile, paramFileName) => {

            consoleIfDebug(url);
            logRequest({url}, 'request', url);

            const options = {
                headers: {
                    'Content-Type': objectFile.type
                }
            };

            try {
                return await axios
                    .put(url, objectFile, options)
                    .then(function (response) {
                        consoleIfDebug(response);
                        logRequest(response, 'response', url);

                        return response.data;
                    })
                    .catch(function (error) {
                        return handleCatchError(error, url);
                    });
            } catch (error) {
                return handleCatchError(error, url);
            }
        },

        uploadFilePOST: async (url, objectFile, paramFileName, paramHeader) => {

            consoleIfDebug(url);
            logRequest({url}, 'request', url);

            //Este metodo  no es json
            const customHeaders = {'Content-Type': 'multipart/form-data'};
            let facHeaders = {};
            if (typeof factoryHeader === 'function') {
                facHeaders = factoryHeader();
            }

            let headers = {...paramHeader, customHeaders, ...facHeaders};

            const formData = new FormData();

            formData.append(paramFileName, objectFile);

            try {
                return await axios
                    .post(url, formData, headers)
                    .then(function (response) {
                        consoleIfDebug(response);
                        logRequest(response, 'response', url);

                        return response.data;
                    })
                    .catch(function (error) {
                        return handleCatchError(error, url);
                    });
            } catch (error) {
                return handleCatchError(error, url);
            }
        }
    }
};

export default FactoryReqJson;