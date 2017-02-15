"use strict";

const mock = require('mock-require'),
    STATE = require('../terminal/states'),
    bddStdIn = require('bdd-stdin');

let sessionData = {};

const assert = require('assert'),
    languageMenu = require('../terminal/language-menu')(sessionData);

describe("language menu tests", () => {
    it("Pressing enter on language screen sets English and returns main state", () => {
        bddStdIn("\n");
        return languageMenu()
            .then((data) => {
                assert(data === STATE.MAIN);
                assert(!sessionData.isWookiee);
            })
            .catch((error) => {
                console.log(error);
                assert(false);
            })
    });
    it("Pressing down and enter on language screen sets Wookiee and returns main state", () => {
        bddStdIn(bddStdIn.keys.down, "\n");
        return languageMenu()
            .then((data) => {
                assert(data === STATE.MAIN);
                assert(sessionData.isWookiee);
            })
            .catch((error) => {
                console.log(error);
                assert(false);
            })
    })
});
