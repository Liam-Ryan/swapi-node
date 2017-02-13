"use strict";

const inquirer = require('inquirer'),
    translator = require('../translate/english-wookiee-translator'),
    STATE = {
        EXIT: -1,
        MAIN: 1,
        STARSHIP_STOPS: 2,
        STOPS_RESULTS: 3
    };

let currentSession = {
    isWookiee: false,
    state: null
};

let translate = ( input ) => {
  return translator.translate( input, currentSession.isWookiee);
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
        name: "state",
        message: () => translator.translate("Please select an operation", currentSession.isWookiee),
        choices: () => {
            return [
                {
                    name: translate("Calculate starship supply stops for a given MGLT"),
                    value: STATE.STARSHIP_STOPS
                },
                {
                    name: translate("Exit"),
                    value: STATE.EXIT
                }
            ]
        }
    }
];

let stopsMenu = [
    {
        type: "input",
        name: "MGLT",
        message: () => translate("Please enter the number of megalights"),
        validator: (input) => {
            let inputFloat = parseFloat(input);
            if( !isNaN(inputFloat) && inputFloat > 0) {
                if( input.length > 15 ) {
                    return translate("Please use a number less than 15 digits long to preserve accuracy");
                } else {
                    return true;
                }
            }
            return translate("Please enter an unformatted number greater than 0 eg 1000")
        }
    },
    {

    }
];

let loadMainMenu = () => {
    return inquirer.prompt(mainMenu)
        .then(handleState)
};

let loadStopsMenu = () => {
    return inquirer.prompt(stopsMenu)
        .then(handleState)
};

let handleState = (answers) => {
    currentSession.state = answers.state;
    console.log(currentSession.state);
    switch (currentSession.state) {
        case STATE.EXIT:
            return;
        case STATE.MAIN:
            return loadMainMenu();
        case STATE.STARSHIP_STOPS:
            return loadStopsMenu();
    }
}

let terminal = () => {

    return inquirer.prompt([languageOptions])
        .then((answers) => {
            currentSession.isWookiee = answers.isWookiee;
            console.log(currentSession.isWookiee);
            currentSession.state = STATE.MAIN;
        })
        .then(loadMainMenu)
};

module.exports = terminal;