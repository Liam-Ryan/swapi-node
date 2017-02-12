"use strict";

const JSON_HEADER = {"content-type": "application/json"},
    HTTP_HEADER = {"content-type": "text/html"},
    sampleJSON = require("./api-responses"),
    serverMock = require("mock-http-server");

let serverInstance = () => {
    let server = new serverMock({
        host: "localhost",
        port: "9784"
    });

    let fakeGetReqRes = (uri, status, headers, body) => {
        return {
            method: "GET",
            path: uri,
            reply: {
                status: status,
                headers: headers,
                body: body
            }
        }
    };

    let relativePathAsJSON = (req) => {
        return `{"url": "${req.url}"}`;
    };

//http-request test endpoints
    server.on(fakeGetReqRes("/badjson", 200, JSON_HEADER, "{'badjson': []}"));
    server.on(fakeGetReqRes("/starships", 200, {"Content-Type": "application/json"}, (req) => {
        let isWookiee = req.url.indexOf("wookiee") > 0;
        if( req.url.indexOf("page=2") > 0) {
            return isWookiee ? sampleJSON.starships.page2Wookiee : sampleJSON.starships.page2;
        }
        return isWookiee ? sampleJSON.starships.page1Wookiee : sampleJSON.starships.page1
    }));
    server.on(fakeGetReqRes("/html", 200, HTTP_HEADER, "I sense a great disturbance in the force"));
    server.on(fakeGetReqRes("/emptyjsonpage", 200, JSON_HEADER, ""));

//swapi-retrieve test endpoints
    server.on(fakeGetReqRes("/people", 200, JSON_HEADER, relativePathAsJSON));
    server.on(fakeGetReqRes("/people/3", 200, JSON_HEADER, relativePathAsJSON));
    server.on(fakeGetReqRes("/", 200, JSON_HEADER, relativePathAsJSON));

    return server
};
module.exports = serverInstance;