const swapi = require('./../web/swapi-retrieve'),
    _ = require('lodash'),
    translator = require('./../translate/english-wookiee-translator'),
    MGLT_ERROR = "Please enter an unformatted positive number for MGLT. eg 1000000";

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

let parseHours = (timePeriodString, language) => {
    let stringArray = timePeriodString.split(" "),
        units = parseFloat(stringArray[0]),
        type = stringArray[1];

    if (!isNaN(units) && types[language][type]) {
        return units * types[language][type]
    }
};

let getShipsWithJumps = (options, mglt) => {
    mglt = parseFloat(mglt);
    options.entityType = "starships";

    if (!mglt || isNaN(parseFloat(mglt)) || parseFloat(mglt) < 0) {
        return Promise.reject(translator.translate(MGLT_ERROR, options.isWookiee))
    }

    let consumables = options.isWookiee ? translator.translateEnglish("consumables") : "consumables",
        unknown = options.isWookiee ? translator.translateEnglish("unknown") : "unknown",
        stops = options.isWookiee ? translator.translateEnglish("stops") : "stops",
        name = options.isWookiee ? translator.translateEnglish("name") : "name";

    let calculateJumps = (shipsArray) => {
        //MGLT is also MGLT IN wookiee
        _.each(shipsArray, (ship) => {
            if (!isNaN(parseInt(ship.MGLT) && ship[consumables] !== unknown)) {
                let totalHours = mglt / parseInt(ship.MGLT),
                    hoursPerResupply = parseHours(ship[consumables], options.isWookiee ? "wookiee" : "english");
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