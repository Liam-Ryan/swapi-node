"use strict";

const dictionaries = require('./dictionaries'),
    _ = require('lodash');

/**
 * Translate a wookie string to english. If wookiee were a real language I'd instead set up localization files and just require the language selected
 *
 *  @param wookieString string to translate to english
 */
let translateWookiee = (wookieString) => {
    //Wookiee needs some extra logic as certain letters mean you also take the next letter as the translation string
    let stringArray = [],
        currentString = "";
    Array.prototype.forEach.call(wookieString, (char) => {
        char = char.toLowerCase();
        if( !currentString ) {
            switch(char) {
                case "a":
                case "o":
                case "r":
                case "s":
                case "u":
                case "w":
                case "h":
                    currentString += char;
                    break;
                default:
                    stringArray.push(char);
            }
        } else {
            stringArray.push(currentString + char);
            currentString = "";
        }
    });
    return translate(stringArray, dictionaries.wookieToEnglish);
};

/**
 * Wrapper around translate for english
 *
 * @param englishString
 */
let translateEnglish = (englishString) => {
    return translate(englishString.split(""), dictionaries.englishToWookiee)
};

/**
 * Translate using dictionaries
 *
 * @param stringArray The string to translate as an array ( for wookiee this should already be split using translateWookie function
 * @param dictionary The dictionary to use for the translation
 * @returns {string}
 */
let translate = (stringArray, dictionary) => {
    let translation = "";
    _.each(stringArray, (str) => {
        if (dictionary[str]) {
            translation += dictionary[str];
        } else {
            translation += str
        }
    });
    return translation;
};

let translateIsWookiee = ( string, isWookiee ) => {
    return isWookiee ? translateEnglish(string) : string;
};

module.exports = {
    translateEnglish: translateEnglish,
    translateWookiee: translateWookiee,
    translate: translateIsWookiee
};
