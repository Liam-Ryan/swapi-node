const STATE = require('./states'),
    translator = require('../translate/english-wookiee-translator'),
    inquirer = require('inquirer');

/**
 * Creates an instance of mainmenu using the provided sessionData object.
 * Displayed language depends on the isWookiee property of sessionData object
 *
 * @param sessionData can be an empty object. Should be shared with all menu instances created for application
 * @returns {function()} returns a function which will create the inquirer menu for main menu when run
 * It will return a promise which resolves to the chosen state.
 */
let mainMenu = ( sessionData) => {
    if( !sessionData ) {
        throw "sessionData must be provided, it can be an empty object but be sure the same sessionData object is shared amongst all menus"
    }

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