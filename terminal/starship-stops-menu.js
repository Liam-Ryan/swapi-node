"use strict";

const translator = require('../translate/english-wookiee-translator').translate,
    inquirer = require('inquirer'),
    STATE = require('./states'),
    _ = require('lodash'),
    stopCalculator = require('../starshipstopcalculator/starship-stops');

let starshipStopsMenu = (sessionData) => {

    let translate = (string) => translator(string, sessionData.isWookiee);

    let stopsMenu = [
        {
            type: "input",
            name: "MGLT",
            message: () => translate("Please enter the number of megalights"),
            validate: (input) => {
                let inputFloat = parseFloat(input);
                if (!isNaN(inputFloat) && inputFloat > 0) {
                    if (input.length > 15) {
                        return translate("Please use a number less than 15 digits long to preserve accuracy");
                    } else {
                        return true;
                    }
                }
                return translate("Please enter an unformatted number greater than 0 eg 1000")
            }
        },
        {
            type: "input",
            name: "find",
            message: () => translate("Search term for ship: ( press enter for all ships )")
        },
        {
            type: "list",
            name: "isShowingUnknown",
            message: () => translate("Would you like to show ships for which the supply stops cannot be calculated?"),
            choices: () => {
                return [
                    {
                        name: translate("Yes, show ships with unknown stops"),
                        value: true
                    },
                    {
                        name: translate("No, show only ships with calculated stops"),
                        value: false
                    }
                ]
            }
        }
    ];

    let handleShipSummaryScreen = (answers) => {
        if (answers.ship === STATE.MAIN) {
            return Promise.resolve(STATE.MAIN);
        } else {
            let shipString = "";
            _.each(answers.ship, (value, key) => {
                switch (key) {
                    case translate("name"):
                        shipString += ` \n${value}\n ${new inquirer.Separator()}\n`;
                        break;
                    case translate("films"):
                    case translate("created"):
                    case translate("edited"):
                    case translate("url"):
                    case translate("pilots"):
                        break;
                    default:
                        shipString += ` ${key}: ${value}\n`;
                }
            });
            console.log(shipString);
            return shipSummaryScreen()
                .then(handleShipSummaryScreen);
        }

    };

    let loadStarships = (answers) => {
        return stopCalculator({
            isWookiee: sessionData.isWookiee,
            find: answers.find
        }, answers.MGLT)
            .then((data) => {
                if (!answers.isShowingUnknown) {
                    data = _.filter(data, (ship) => ship[translate("stops")] !== "N/A")
                }
                data = _.sortBy(data, ship => {
                    let stops = parseInt(ship[translate("stops")]);
                    if (isNaN(stops)) {
                        stops = 999999;
                    }
                    return stops;
                });
                sessionData.ships = data;
                return Promise.resolve(data);
            })
            .then(shipSummaryScreen)
            .then(handleShipSummaryScreen)

    };

    let shipSummaryScreen = () => {
        return inquirer.prompt([
            {
                type: "list",
                name: "ship",
                message: () => {
                    if (sessionData.ships.length) {
                        return translate(` ${new inquirer.Separator()}\n ${sessionData.ships.length} ships found\n Select a ship to view more details or menu to return to main menu`)
                    } else {
                        return translate("No matching results, select menu to return to main menu")
                    }
                },
                choices: () => {
                    let choices = [
                        new inquirer.Separator(),
                        {
                            name: translate("return to main menu").toUpperCase(),
                            value: STATE.MAIN
                        },
                        new inquirer.Separator()
                    ];
                    _.each(sessionData.ships, ship => {
                        choices.push(
                            {
                                name: `${ship[translate("name")]} - ${ship[translate("stops")]} ${translate("stops")}`,
                                value: ship
                            }
                        );
                    });
                    return choices;
                },
                pagesize: 10
            }
        ])
    };

    return () => {
        return inquirer.prompt(stopsMenu)
            .then(loadStarships)
    };

};

module.exports = starshipStopsMenu;