"use strict";

let serverMock = require("mock-http-server"),
    server = new serverMock({
        host: "localhost",
        port: "9784"
    }),
    sampleJSON = require("./api-responses");

let fakeGetReqRes = (uri, status, headers, body) => {
    return {
        method: 'GET',
        path: uri,
        reply: {
            status: status,
            headers: headers,
            body: body
        }
    }
};

server.on(fakeGetReqRes("/badjson", 200, {"content-type": "application/json"}, "{'badjson': []}"));
server.on(fakeGetReqRes("/starships", 200, {"Content-Type": "application/json"}, sampleJSON.starships));
server.on(fakeGetReqRes("/html", 200, {"content-type": "text/html"}, "I sense a great disturbance in the forks"));


module.exports = server;