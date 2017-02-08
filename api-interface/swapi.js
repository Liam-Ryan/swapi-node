"use strict";

const request = require('request-promise-native'),
    rootURL = "http://swapi.co/api/";

let fetchEndpoint = ( endpoint ) => {
    let options = {
        uri: rootURL + endpoint,
        json: true
    };
    return request( options )
};

module.exports = {
  fetchEndpoint: fetchEndpoint
};