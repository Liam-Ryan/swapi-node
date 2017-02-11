"use strict";

const assert = require('assert'),
    server = require('./test-server').server,
    fakeGetReqRes = require('./test-server').fakeGetReqRes,
    sampleJSON = require('./api-responses'),
    httpRequest = require('../web/http-request'),
    jsonRequest = httpRequest.fetchJSON;

require('sinon-as-promised');

describe('SWAPI requests', () => {
    describe('Retrieve endpoints', () => {
        beforeEach((done) => {
            server.start(done)
        });
        afterEach( (done) => {
            server.stop(done);
        });
        it('starships endpoint Should return starships', () => {
            server.on(fakeGetReqRes("/starships", 200, {"Content-Type": "application/json"}, sampleJSON.starships));
            return jsonRequest("http://localhost:9784/starships")
                .then((data) => {
                    console.log(data);
                    assert.ok(data);
                })
                .catch((error) => {
                    console.log(error);
                    assert.ok(false);
                })
        });
        it('bad endpoint should be caught ', () => {
            return jsonRequest("http://localhost:9784/nope")
                .then((data) => {
                    console.log(`Hit then instead of catch accessing endpoint 'nope'`);
                    assert.ok(false)
                })
                .catch(() => {
                    console.log(`Correctly hit catch block for endpoint 'nope`);
                    assert.ok(true)
                })
        });
        it('non json resource ', () => {
            return jsonRequest("http://localhost:9784/html")
                .then((data) => {
                    console.log("Page was returned when it should not have been");
                    assert.ok(false);
                })
                .catch((data) => {
                    console.log(data);
                    console.log("error was thrown");
                    assert.ok(true);
                })
        });
        it("Invalid JSON response", () => {
            server.on(fakeGetReqRes("/badjson", 200, {"content-type": "application/json"}, "{'badjson': []}"));
            return jsonRequest("http://localhost:9784/badjson")
                .then(() => {
                    console.log("Data was returned instead of error being thrown by JSON.parse");
                    assert.ok(false)
                })
                .catch((error) => {
                    console.log("Error correctly thrown for malformed json");
                    console.log(error);
                    assert.ok(true)
                });
        })
    });
});