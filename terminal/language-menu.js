"use strict";

const translator = require('../translate/english-wookiee-translator'),
    inquirer = require('inquirer'),
    STATE = require('./states');

/**
 * Creates an instance of languageMenu using the provided sessionData object. The language is stored in the sessionData object

 * @param sessionData can be an empty object. Should be shared with all menu instances created for application
 * @returns {function()} returns a function which will create the inquirer menu for language menu when run
 * It will return a promise which resolves to the chosen state.
 */
let languageMenu = ( sessionData ) => {
    if( !sessionData ) {
        throw "sessionData must be provided, it can be an empty object but be sure the same sessionData object is shared amongst all menus"
    }

    let languageOptions = {
        type: "list",
        name: "isWookiee",
        message: `Select your language / ${translator.translateEnglish("Select your language")}`,
        choices: [
            {
                name: "English",
                value: false
            },
            {
                name: translator.translateEnglish("Wookiee"),
                value: true
            }]
    };

    return () => {
        return inquirer.prompt(languageOptions)
            .then((answers) => {
                sessionData.isWookiee = answers.isWookiee;
                return Promise.resolve(STATE.MAIN);
            })
    };

};
module.exports = languageMenu;