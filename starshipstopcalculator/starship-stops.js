const swapi = require('./../web/swapi-retrieve'),
    _ = require('lodash'),
    translator = require('./../translate/english-wookiee-translator'),
    STRING_CONSTANTS = require('../translate/strings');

//string units to hours
let types = {
    english: {
        "day": 24,
        "days": 24,
        "week": 168,
        "weeks": 168,
        "month": 730.001,
        "months": 730.001,
        "year": 8760,
        "years": 8760
    },
    wookiee: {
        "wararo": 24,
        "wararoc": 24,
        "ohwowoor": 168,
        "ohwowoorc": 168,
        "scoowhaoac": 730.001,
        "scoowhaoacc": 730.001,
        "roworarc": 8760,
        "roworarcc": 8760
    }
};

/**
 * Takes a string from swapi and a language for that string and converts to hours
 *
 * @param timePeriodString required, format is <x units>. Units should be in the types object above
 * @param language required, should be either "english" or "wookiee"
 * @returns {number} - 0 if an error occurs
 */
let parseHours = (timePeriodString, language) => {
    try {
        let stringArray = timePeriodString.split(" "),
            units = parseFloat(stringArray[0]),
            type = stringArray[1];

        if (!isNaN(units) && types[language][type]) {
            return units * types[language][type]
        } else {
            return 0
        }

    } catch (error) {
        return 0;
    }
};

/**
 * Retrieve ships from swapi based on provided options and add the number of resupplies for the provided mglt as "stops" property.
 * It is expected that the caller will handle any errors with a .catch block on the promise
 *
 * @param options - an object containing isWookiee and/or find. isWookie will retrieve Wookiee if true, find will be submitted as a search parameter to swapi. entityType will be overridden to "starships" if provided. entityID can be provided if required.
 * @param mglt - the number of megalights to use in ship stops calculations
 * @returns {*} A promise which resolves to an array of ships
 */
let getShipsWithJumps = (options, mglt) => {
    mglt = parseFloat(mglt);
    options.entityType = "starships";

    if (!mglt || isNaN(parseFloat(mglt)) || parseFloat(mglt) < 0) {
        return Promise.reject(translator.translate(STRING_CONSTANTS.ERRORS.MGLT_ERROR, options.isWookiee))
    }

    let consumables = translator.translate(STRING_CONSTANTS.SWAPI_KEYWORDS.CONSUMABLES, options.isWookiee),
        unknown = translator.translate(STRING_CONSTANTS.SWAPI_KEYWORDS.UNKNOWN, options.isWookiee),
        stops = translator.translate(STRING_CONSTANTS.SWAPI_KEYWORDS.STOPS, options.isWookiee);

    let calculateJumps = (shipsArray) => {
        //MGLT is also MGLT IN wookiee
        _.each(shipsArray, (ship) => {
            if (!isNaN(parseInt(ship.MGLT) && ship[consumables] !== unknown)) {
                let totalHours = mglt / parseInt(ship.MGLT),
                    hoursPerResupply = parseHours(ship[consumables], options.isWookiee ? STRING_CONSTANTS.LANGUAGES.WOOKIEE : STRING_CONSTANTS.LANGUAGES.ENGLISH);
                ship[stops] = Math.floor(totalHours / hoursPerResupply);
            } else {
                ship[stops] = "N/A"
            }
        });
        return Promise.resolve(shipsArray);
    };

    return swapi.getAllEntities(options)
        .then(calculateJumps)
};

module.exports = getShipsWithJumps;