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

let loadMenu = (state) => {
    let menuLoader = menus[state];
    if (menuLoader) {
        return menuLoader()
            .then(transitionToState)
    } else {
        return Promise.reject("Invalid menu selected")
    }
};

let transitionToState = (state) => {
    switch (state) {
        case STATE.EXIT:
            return;
        default:
            return loadMenu(state)
    }
};

let start = () => {
    loadMenu(STATE.SELECT_LANGUAGE)
};

module.exports = start;