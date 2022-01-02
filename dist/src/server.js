"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes_1 = require("./routes");
var app = (0, express_1["default"])();
var port = 3000;
app.use(express_1["default"].json());
app.get("/", function (req, res) {
    res.send("Hello, World!");
});
app.use('/api/v1/materials', routes_1["default"]);
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
//# sourceMappingURL=server.js.map