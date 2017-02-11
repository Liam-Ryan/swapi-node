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

module.exports = {
    server: server,
    fakeGetReqRes: fakeGetReqRes
};