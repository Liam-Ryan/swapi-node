"use strict";

const mock = require('mock-require'),
    STATE = require('../terminal/states'),
    bddStdIn = require('bdd-stdin');

let sessionData = {};

const assert = require('assert'),
    mainMenu = require('../terminal/main-menu')(sessionData);

describe("main menu tests", () => {
    it("Pressing enter on main menu returns starship stops state", () => {
        //3 false inputs to try and avoid failures due to async, bad hack but not enough time for proper E2E testing suite
        bddStdIn("", "", "", "\n");
        return mainMenu()
            .then((data) => {
                console.log(data);
                assert(data === STATE.STARSHIP_STOPS);
            })
            .catch((error) => {
                console.log(error);
                assert(false);
            })
    });
    it("Pressing down and enter on main menu returns select language screen state", () => {
        bddStdIn("", "", "", bddStdIn.keys.down, "\n");
        return mainMenu()
            .then((data) => {
                assert(data === STATE.SELECT_LANGUAGE);
            })
            .catch((error) => {
                console.log(error);
                assert(false);
            })
    });
    it("Pressing down, down and enter on main menu exits application", () => {
        bddStdIn("", "", "", bddStdIn.keys.down, bddStdIn.keys.down, "\n");
        return mainMenu()
            .then((data) => {
                assert(data === STATE.EXIT);
            })
            .catch((error) => {
                console.log(error);
                assert(false);
            })
    })
});
