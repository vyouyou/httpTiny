"use strict";
exports.__esModule = true;
var tcpPromise_1 = require("./utils/tcpPromise");
var net_1 = require("./utils/net");
var array = [];
exports.clientRequest = function (url, method) {
    return tcpPromise_1["default"](url, net_1.formatData(method));
};
(function () {
    exports.clientRequest("14.215.177.39", "get");
})();
