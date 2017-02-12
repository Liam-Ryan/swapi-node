"use strict";

const assert = require('assert'),
    translator = require('../translate/english-wookiee-translator');

describe("English wookie translations", () => {
    it("http://swapi.co/api/planets/?format=wookiee&page=2 is acaoaoak://cohraakah.oaoo/raakah/akanrawhwoaoc/?wwoorcscraao=ohooooorahwowo&akrarrwo=2", () => {
        assert(translator.translateEnglish("http://swapi.co/api/planets/?format=wookiee&page=2") === "acaoaoak://cohraakah.oaoo/raakah/akanrawhwoaoc/?wwoorcscraao=ohooooorahwowo&akrarrwo=2")
    });
    it("acaoaoak://cohraakah.oaoo/raakah/akanrawhwoaoc/?wwoorcscraao=ohooooorahwowo&akrarrwo=2 is http://swapi.co/api/planets/?format=wookiee&page=2", () => {
        assert(translator.translateWookiee("acaoaoak://cohraakah.oaoo/raakah/akanrawhwoaoc/?wwoorcscraao=ohooooorahwowo&akrarrwo=2") === "http://swapi.co/api/planets/?format=wookiee&page=2")
    })
});