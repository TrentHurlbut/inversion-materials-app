"use strict";
var express = require('express');
var materialsRoutes = require('./src/materials/routes');
var app = express();
var port = 3000;
app.use(express.json());
app.get("/", function (req, res) {
    res.send("Hello, World!");
});
app.use('/api/v1/materials', materialsRoutes);
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
//# sourceMappingURL=server.js.map