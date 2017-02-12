"use strict";

const dictionaries = require('./dictionaries'),
    _ = require('lodash');

let translateWookiee = (wookieString) => {
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

let translateEnglish = (englishString) => {
    return translate(englishString.split(""), dictionaries.englishToWookiee)
};

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
