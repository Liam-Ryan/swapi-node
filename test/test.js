"use strict";

const assert = require('assert'),
    swapi = require('../api-interface/swapi').fetchEndpoint;

let apiTestCallback = (error, json ) => {
    if ( !error ) {
        if ( json ) {
            console.log(json);
        } else {
            error = "JSON response is unexpectedly empty"
        }
    }
    return error;
};

describe( 'SWAPI requests', () => {
    describe( 'Retrieve endpoints', ()=> {
        it('Should return starships', (done) => {
            done( swapi("starships", apiTestCallback ) )
        });
    });
});