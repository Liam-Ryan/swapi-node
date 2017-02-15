"use strict";

const request = require('request-promise-native').get;

/**
 * Retrieve a provided url
 *
 * @param url the full url as a string
 * @returns {Choice|Undefined|*} Promise which resolves to a request or a rejection
 */
let fetchURL = (url) => {
    let options = {
        uri: url,
        resolveWithFullResponse: true
    };
    return request(options)
};

/**
 * Retrieve a provided url and automatically parse to JSON. Returns an error if the content is not JSON or if parsing fails
 *
 * @param url - the url to query
 *
 * @return Promise which resolves on data or rejects on error. Always check if json is not empty on resolve as this is still valid
 */
let fetchJSON = (url) => {
    return fetchURL(url)
        .then((response) => {
            let contentTypeHeaders = response.headers['content-type'];
            if (response.statusCode == 200 && contentTypeHeaders && contentTypeHeaders.toLowerCase().indexOf('application/json') > -1) {
                try {
                    //wookiee is not valid json, replace whhaunan with null to avoid parse exceptions
                    response.body = response.body.replace(/whhuanan/g, "null");
                    return Promise.resolve(JSON.parse(response.body));
                } catch (error) {
                    return Promise.reject(`A JSON endpoint was found at ${url} but the json parser failed with the following error - ${error}`)
                }
            }
            return Promise.reject("URL was not a valid JSON endpoint")
        })
};

module.exports = {
    fetchJSON: fetchJSON
};