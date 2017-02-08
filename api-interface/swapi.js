"use strict";

const request = require('request'),
    rootURL = "http://swapi.co/api/";

let fetchEndpoint = ( endpoint, callback ) => {
    request( rootURL + endpoint, (error, response, body) => {
        let jsonResponse = "";
        if ( !error && response.statusCode == 200) {
            jsonResponse = JSON.parse(body);
        }
        callback( error, jsonResponse );
    })
};

module.exports = {
  fetchEndpoint: fetchEndpoint
};