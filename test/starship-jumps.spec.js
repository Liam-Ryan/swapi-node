"use strict";

const mock = require('mock-require');
mock('../config/config', {
    swapiRootURL: "http://localhost:9784"
});

const jumps = require("../starshipstopcalculator/starship-stops"),
    assert = require('assert'),
    mockServer = require('./test-server')(),
    _ = require('lodash'),
    translator = require('../translate/english-wookiee-translator');

describe("Test starship resupply calculations", () => {
    before((done) => {
        mockServer.start(done)
    });
    after((done) => {
        mockServer.stop(done);
    });
    it("Y-wing takes 74 stops", () => {
        return jumps({entityType: "starships"}, 1000000)
            .then((data) => {
                assert(_.find(data, ship => ship.name === "Y-wing").stops === 74)
            })
            .catch((error) => {
                console.log(error);
                assert(false)
            })
    });
    it("Y-wing takes 74 stops for float", () => {
        return jumps({entityType: "starships"}, 1000000.000124)
            .then((data) => {
                assert(_.find(data, ship => ship.name === "Y-wing").stops === 74)
            })
            .catch((error) => {
                console.log(error);
                assert(false)
            })
    });
    it("Promise is rejected for non-numeric number of MGLT", () => {
        return jumps({entityType: "starships"}, "one thousand")
            .then((data) => {
                console.log(data);
                assert(false);
            })
            .catch((error) => {
                assert (error === "Please enter an unformatted positive number for MGLT. eg 1000000")
            })
    });
    it("Promise is rejected for 0 MGLT", () => {
        return jumps({entityType: "starships"}, 0)
            .then((data) => {
                console.log(data);
                assert(false);
            })
            .catch((error) => {
                assert (error === "Please enter an unformatted positive number for MGLT. eg 1000000")
            })
    });
    it("Promise is rejected for negative MGLT", () => {
        return jumps({entityType: "starships"}, -10)
            .then((data) => {
                console.log(data);
                assert(false);
            })
            .catch((error) => {
                assert (error === "Please enter an unformatted positive number for MGLT. eg 1000000")
            })
    });
    it("Promise is rejected for negative MGLT in Wookiee", () => {
        return jumps({entityType: "starships", isWookiee: true }, -10)
            .then((data) => {
                console.log(data);
                assert(false);
            })
            .catch((error) => {
                assert (error === translator.translateEnglish("Please enter an unformatted positive number for MGLT. eg 1000000"));
            })
    });
    it("Y-wing takes 74 stops in wookiee", () => {
        return jumps({entityType: "starships", isWookiee: true}, 1000000)
            .then((data) => {
                assert(_.find(data, ship =>
                    ship[translator.translateEnglish("name")] === translator.translateEnglish("Y-wing"))
                        [translator.translateEnglish("stops")] === 74)
            })
            .catch((error) => {
                console.log(error);
                assert(false)
            })
    })
});