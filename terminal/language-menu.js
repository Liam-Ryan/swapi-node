"use strict";

const translator = require('../translate/english-wookiee-translator'),
    inquirer = require('inquirer'),
    STATE = require('./states');

let languageMenu = ( sessionData ) => {

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