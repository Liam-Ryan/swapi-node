'use strict';

const mock = require('mock-require');
mock('../config/config', {
    swapiRootURL: "http://localhost:9784"
});

const assert = require('assert'),
    mockServer = require('./test-server')(),
    swapi = require('../web/swapi-retrieve');

describe('swapi-retrieve tests', () => {
    describe('Test correct urls are requested', () => {
        before((done) => {
            mockServer.start(done)
        });
        after((done) => {
            mockServer.stop(done);
        });
        it("Retrieve base entity type", () => {
            return swapi.getEntity({entityType: "people"})
                .then((data) => {
                    console.log(data);
                    assert(data.url === "/people")
                })
                .catch((error) => {
                    console.log(error);
                    assert(false);
                })
        });
        it("Retrieve base entity type in Wookiee", () => {
            return swapi.getEntity({entityType: "people", isWookiee: true})
                .then((data) => {
                    assert(data.url === "/people?format=wookiee")
                })
                .catch(() => {
                    assert(false);
                })
        });
        it("Retrieve base entity type with search", () => {
            return swapi.getEntity({entityType: "people", find: "r2"})
                .then((data) => {
                    console.log(data);
                    assert(data.url === "/people?search=r2")
                })
                .catch((error) => {
                    console.log(error);
                    assert(false);
                })
        });
        it("Retrieve base entity type with search in wookiee", () => {
            return swapi.getEntity({entityType: "people", isWookiee: true, find: "r2"})
                .then((data) => {
                    console.log(data);
                    assert(data.url === "/people?format=wookiee&search=r2")
                })
                .catch((error) => {
                    console.log(error);
                    assert(false);
                })
        });
        it("Retrieve single entity by id", () => {
            return swapi.getEntity({entityType: "people", entityId: 3})
                .then((data) => {
                    console.log(data);
                    assert(data.url === "/people/3")
                })
                .catch((error) => {
                    console.log(error);
                    assert(false);
                })
        });
        it("Retrieve single entity by id in wookie", () => {
            return swapi.getEntity({entityType: "people", entityId: 3, isWookiee: true})
                .then((data) => {
                    console.log(data);
                    assert(data.url === "/people/3?format=wookiee")
                })
                .catch((error) => {
                    console.log(error);
                    assert(false);
                })
        });
        it("Call getEntity with empty options", () => {
            return swapi.getEntity({})
                .then((data) => {
                    console.log(data);
                    assert(data.url === "/")
                })
                .catch((error) => {
                    console.log(error);
                    assert(false);
                })
        });
        it("Call getEntity with no arguments", () => {
            return swapi.getEntity()
                .then((data) => {
                    console.log(data);
                    assert(data.url === "/")
                })
                .catch((error) => {
                    console.log(error);
                    assert(false);
                })
        })
    })
});