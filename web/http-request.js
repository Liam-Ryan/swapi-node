"use strict";

const request = require('request-promise-native').get;

let fetchURL = (url) => {
    let options = {
        uri: url,
        resolveWithFullResponse: true
    };
    return request(options)
};

/**
 *
 * @param url - the url to query
 *
 * @return Promise which resolves on data or rejects on error. Always check if json is not empty on resolve
 */
let fetchJSON = (url) => {
    return fetchURL(url)
        .then((response) => {
            let contentTypeHeaders = response.headers['content-type'] || response.headers['Content-Type'];
            if (response.statusCode == 200 && contentTypeHeaders && contentTypeHeaders.toLowerCase().indexOf('application/json') > -1) {
                try {
                    return Promise.resolve(JSON.parse(response.body));
                } catch (error) {
                    return Promise.reject(`A JSON endpoint was found at ${url} but the json parser failed with the following error - ${error}`)
                }
            }
            return Promise.reject("URL was not a valid JSON endpoint")
        })
};

module.exports = {
    fetchJSON: fetchJSON,
    fetchURL: fetchURL
};