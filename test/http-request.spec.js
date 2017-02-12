"use strict";


const assert = require('assert'),
    mockServer = require('./test-server')(),
    httpRequest = require('../web/http-request'),
    jsonRequest = httpRequest.fetchJSON;

describe('http-request tests', () => {
    before((done) => {
        mockServer.start(done)
    });
    after( (done) => {
        mockServer.stop(done);
    });
    describe('Retrieve endpoints', () => {
        it('starships endpoint Should return 10 starships', () => {
            return jsonRequest("http://localhost:9784/starships")
                .then((data) => {
                    assert(data.results.length === 10);
                })
                .catch((error) => {
                    console.log(error);
                    assert(false);
                })
        });
        it('bad endpoint should be caught ', () => {
            return jsonRequest("http://localhost:9784/nope")
                .then(() => {
                    console.log(`Hit then instead of catch accessing endpoint 'nope'`);
                    assert(false)
                })
                .catch(() => {
                    assert(true)
                })
        });
        it('non json resource ', () => {
            return jsonRequest("http://localhost:9784/html")
                .then(() => {
                    console.log("Page was returned when it should not have been");
                    assert(false);
                })
                .catch((data) => {
                    assert(data, "URL was not a valid JSON endpoint");
                })
        });
        it("Invalid JSON response", () => {
            return jsonRequest("http://localhost:9784/badjson")
                .then(() => {
                    console.log("Data was returned instead of error being thrown by JSON.parse");
                    assert(false)
                })
                .catch((error) => {
                    assert(error.indexOf("A JSON endpoint was found at") > -1 );
                });
        })
    });
});