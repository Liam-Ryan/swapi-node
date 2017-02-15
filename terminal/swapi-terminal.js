"use strict";

let sessionData = {};

const inquirer = require('inquirer'),
    stopsMenu = require('./starship-stops-menu')(sessionData),
    languageMenu = require('./language-menu')(sessionData),
    mainMenu = require('./main-menu')(sessionData),
    STATE = require('./states');

let menus = {
    [STATE.MAIN]: mainMenu,
    [STATE.SELECT_LANGUAGE]: languageMenu,
    [STATE.STARSHIP_STOPS]: stopsMenu
};

/**
 * Take a state, check if it's valid and transition to it if so. Handles any errors thrown.
 *
 * @param state - one of states.js constants
 * @returns {*} Promise which is chained to the loaded menu
 */
let loadMenu = (state) => {
    let menuLoader = menus[state];
    if (menuLoader) {
        return menuLoader()
            .then(transitionToState)
            .catch((error) => {
                console.log("Unfortunately an error has occurred. ");
                if ( error.name && error.name === "RequestError") {
                    console.log("It appears the issue is with your connectivity to swapi.co. Are you online and is the site reachable? ")
                }
                if( error.message ) {
                    console.log(error.message);
                } else {
                    console.log(error);
                }
                return false;
            })
    } else {
        return Promise.reject("Invalid menu selected")
    }
};

/**
 * If we have an exit state end the terminal loop, otherwise try to load a corresponding menu for the state
 *
 * @param state one of the states.js constants
 * @returns {*}
 */
let transitionToState = (state) => {
    switch (state) {
        case STATE.EXIT:
            return;
        default:
            return loadMenu(state)
    }
};

/**
 * the entry point fires up the language selector
 *
 * @returns {*}
 */
let start = () => {
    return loadMenu(STATE.SELECT_LANGUAGE)
};

module.exports = start;