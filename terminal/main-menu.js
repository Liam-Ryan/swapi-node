const STATE = require('./states'),
    translator = require('../translate/english-wookiee-translator'),
    inquirer = require('inquirer');

let mainMenu = ( sessionData) => {
    let translate = ( string ) => translator.translate(string, sessionData.isWookiee);

    let mainMenu = [
        {
            type: "list",
            name: "state",
            message: () => translator.translate("Please select an operation", sessionData.isWookiee),
            choices: () => {
                return [
                    {
                        name: translate("Calculate starship supply stops for a given MGLT"),
                        value: STATE.STARSHIP_STOPS
                    },
                    {
                        name: translate("Change language"),
                        value: STATE.SELECT_LANGUAGE
                    },
                    {
                        name: translate("Exit"),
                        value: STATE.EXIT
                    }
                ]
            }
        }
    ];

    return () => {
        return inquirer.prompt(mainMenu)
            .then((answers) => answers.state)
    };
};

module.exports = mainMenu;