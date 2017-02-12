"use strict";
const _ = require('lodash');

let wookieToEnglish = {
    "ac": "h",
    "ah": "i",
    "ak": "p",
    "an": "l",
    "hu": "u",
    "ho": "v",
    "oa": "c",
    "oh": "w",
    "oo": "o",
    "or": "k",
    "ra": "a",
    "rc": "r",
    "rh": "b",
    "ro": "y",
    "rq": "q",
    "rr": "g",
    "sh": "j",
    "sc": "m",
    "uf": "z",
    "wa": "d",
    "wo": "e",
    "ww": "f",
    "wh": "n",
    "c": "s",
    "ao": "t",
    "k": "x",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "0": "0",
    " ": " ",
    "\n": "\n",
    "!": "!",
    "?": "?",
    ".": ".",
    ",": ",",
    "'": "'",
    "-": "-",
    ":": ":",
    "(": "(",
    ")": ")"
},
    englishToWookiee = {};

_.each( wookieToEnglish, ( value, key ) => {
   englishToWookiee[value] = key;
});

module.exports = {
    englishToWookiee: englishToWookiee,
    wookieToEnglish: wookieToEnglish
};