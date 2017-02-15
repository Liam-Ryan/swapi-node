"use strict";

const fetchJSON = require('./http-request').fetchJSON,
    rootURL = require('../config/config').swapiRootURL,
    translator = require('../translate/english-wookiee-translator');

/**
 * Builds a string for a swapi endpoint based on provided options ( endpoint is address without domain )
 *
 * @param options
 *          isWookiee - if true retrieve the endpoint in Wookiee
 *          entityType - any of the endpoints allowed by swapi('people', 'planets', 'films', 'species', 'vehicles', 'starships'). If none are provided it will build swapi root which returns a list of these endpoints. Currently
 *          entityID - if provided and entityType is provided it will attempt to retrieve a specific entity id
 *          find - if provided this is submitted as the swapi "search" option
 * @returns {string}
 */
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

/**
 * Retrieves an entity from swapi as JSON
 *
 * @param options
 *          isWookiee - if true retrieve the endpoint in Wookiee
 *          entityType - any of the endpoints allowed by swapi('people', 'planets', 'films', 'species', 'vehicles', 'starships'). If none are provided it will build swapi root which returns a list of these endpoints. Currently
 *          entityID - if provided and entityType is provided it will attempt to retrieve a specific entity id
 *          find - if provided this is submitted as the swapi "search" option
 *
 * @returns {Promise}
 */
let getEntity = (options) => {
    let entityURL = rootURL + constructEndpoint(options);
    return fetchJSON(entityURL);
};

/**
 * Retrieves entities from swapi and recursively crawls the "next" link to ensure all are retrieved. Also handles wookiee url parsing
 *
 * @param options
 *          isWookiee - if true retrieve the endpoint in Wookiee
 *          entityType - any of the endpoints allowed by swapi('people', 'planets', 'films', 'species', 'vehicles', 'starships'). If none are provided it will build swapi root which returns a list of these endpoints. Currently
 *          entityID - if provided and entityType is provided it will attempt to retrieve a specific entity id
 *          find - if provided this is submitted as the swapi "search" option
 * @param results - results from the previous call
 * @param next - next url from the previous call
 * @returns {*} a promise which should eventually contain all of the entities
 */
let getAllEntities = (options, results, next = "") => {

    /**
     * Part of the recursive logic to parse the data and call itself again. In general I don't like nested functions in JS but I usually make exceptions to keep recursion neater
     *
     * @param data data retrieved from either getEntity or fetchJSON. See core logic below
     * @returns {*}
     */
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

    //core recursion logic
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