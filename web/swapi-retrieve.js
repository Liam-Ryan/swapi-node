"use strict";

const fetchJSON = require('./http-request').fetchJSON,
      rootURL = require('../config/config').swapiRootURL;

let constructEndpoint = (options) => {
    let endpointString = "";
    if( !options ) {
        return endpointString;
    }
    if( options.entityType) {
        endpointString += `/${options.entityType}`;
        if( options.entityId ) {
            endpointString += `/${options.entityId}`;
        }
    }
    if( options.isWookiee ) {
        endpointString += "?format=wookiee"
    }
    if( options.find) {
        //I'm personally not a fan of the ternary operator but I wanted to give a sample of use
        let operator = options.isWookiee ? "&" : "?";
        endpointString += operator + `search=${options.find}`;
    }
    return endpointString
};

let getEntity = ( options ) => {
    let entityURL = rootURL + constructEndpoint(options);
    console.log(entityURL);
    return fetchJSON(entityURL);
};

module.exports = {
    getEntity: getEntity
};