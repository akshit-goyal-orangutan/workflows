"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("node:http");
var handler = function (req, res) {
    res.end("Hello World");
};
var server = http.createServer(handler);
server.listen(8000);
//# sourceMappingURL=index.js.map