"use strict";

const assert = require('assert'),
    swapi = require('../api-interface/swapi').fetchEndpoint;

describe( 'SWAPI requests', () => {
    describe( 'Retrieve endpoints', ()=> {
        it('starships endpoint Should return starships', () => {
            return swapi("starships")
                .then( (data) => {
                    console.log(data);
                    assert.ok(data);
                })
        });
        it('bad endpoint should be caught ', () => {
            return swapi("nope")
                .then( (data) => {
                    console.log(`Hit then instead of catch accessing endpoint 'nope'. Returned data is ${data}`);
                    assert.ok(false)
                })
                .catch( () => {
                    console.log(`Correctly hit catch block for endpoint 'nope`);
                    assert.ok(true)
                })
        })
    });
});