"use strict";

const inquirer = require('inquirer'),
    translator = require('../translate/english-wookiee-translator'),
    EXIT = -1,
    STARSHIP_STOPS = 0;

let currentSession = {
    isWookiee: false
};

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

let mainMenu = [
    {
        type: "list",
        name: "selectedOption",
        message: () => translator.translate("Please select an operation", currentSession.isWookiee),
        choices: () => {
            return [
                {
                    name: translator.translate("Calculate starship supply stops for a given MGLY", currentSession.isWookiee),
                    value: STARSHIP_STOPS
                },
                {
                    name: translator.translate("Exit", currentSession.isWookiee),
                    value: EXIT
                }
            ]
        }
    }
];

let terminal = () => {

    return inquirer.prompt([languageOptions])
        .then((answers) => {
            currentSession.isWookiee = answers.isWookiee;
            console.log(currentSession.isWookiee);
            currentSession.currentState = "menu";
        })
        .then(() => {
            return inquirer.prompt(mainMenu)
        })
};

module.exports = terminal;