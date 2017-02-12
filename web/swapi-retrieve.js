"use strict";

const fetchJSON = require('./http-request').fetchJSON,
    rootURL = require('../config/config').swapiRootURL,
    translator = require('../translate/english-wookiee-translator');

let constructEndpoint = (options) => {
    let endpointString = "";
    if (!options) {
        return endpointString;
    }
    if (options.entityType) {
        endpointString += `/${options.entityType}`;
        if (options.entityId) {
            endpointString += `/${options.entityId}`;
        }
    }
    if (options.isWookiee) {
        endpointString += "?format=wookiee"
    }
    if (options.find) {
        let operator = options.isWookiee ? "&" : "?";
        endpointString += operator + `search=${options.find}`;
    }
    return endpointString
};

let getEntity = (options) => {
    let entityURL = rootURL + constructEndpoint(options);
    return fetchJSON(entityURL);
};


let getAllEntities = (options, results, next = "") => {

    //data can never be null as fetchJSON will either throw an error or return a valid JSON object
    let parseDataAndRecurse = (data) => {
        results = results || [];
        next = "";
        if (data.results && data.results.length) {
            results = [...results, ...data.results]
        }
        //rcwochuanaoc = results in wookiee
        if (data.rcwochuanaoc && data.rcwochuanaoc.length) {
            results = [...results, ...data.rcwochuanaoc]
        }
        //whwokao = next in wookiee
        if (data.whwokao) {
            next = translator.translateWookiee(data.whwokao)
        }
        if (data.next) {
            next = data.next
        }

        return getAllEntities(options, results, next)
    };

    if (!results) {
        return getEntity(options)
            .then(parseDataAndRecurse)
    } else {
        if (next) {
            return fetchJSON(next)
                .then(parseDataAndRecurse)
        } else {
            return Promise.resolve(results);
        }
    }

};

module.exports = {
    getEntity: getEntity,
    getAllEntities: getAllEntities
};