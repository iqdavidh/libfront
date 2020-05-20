const axios = require('axios').default;

async function getHeaders(factoryHeader, paramHeader, customHeaders) {
    let facHeaders = {};
    if (typeof factoryHeader === 'function') {
        facHeaders = factoryHeader();
        //en caso de ser promise------------
        if (facHeaders.then) {
            facHeaders = await factoryHeader();
        }
    }
    let headers = {...paramHeader, ...customHeaders, ...facHeaders};
    return headers;
}

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

    const handleCatchError = (error, url) => {
        consoleIfDebug(error.response);
        logRequest(error.response, 'error', url);

        if (error.response && typeof error.response.data !== 'undefined') {
            return error.response.data;
        }

        return {
            success: false,
            msg: error
        };
    };

    return {
        setIsDebug: (b=true) => {
            isDebug = b;
        },
        setModoLogResquest: pathToDirLog => {
            pathLogRequest = pathToDirLog;
        },
        requestGET: async (url, paramHeader) => {

            consoleIfDebug(url);
            logRequest({url}, 'request', url);
    
            let headers = await getHeaders(factoryHeader, paramHeader, customHeaders);

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
    
            let headers = await getHeaders(factoryHeader, paramHeader, customHeaders);

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
            let headers = await getHeaders(factoryHeader, paramHeader, customHeaders);
    
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

module.exports = FactoryReqJson;