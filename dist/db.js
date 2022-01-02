"use strict";
exports.__esModule = true;
var pg_1 = require("pg");
pg_1["default"];
var pool = new pg_1["default"]({
    user: "postgres",
    host: "localhost",
    database: "inversion_materials",
    password: "test",
    port: 5432
});
exports["default"] = pool;
//# sourceMappingURL=db.js.map