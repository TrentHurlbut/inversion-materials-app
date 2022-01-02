"use strict";
exports.__esModule = true;
var db_1 = require("../../db");
var queries_1 = require("./queries");
var getMaterials = function (req, res) {
    console.log("request sent");
    db_1["default"].query(queries_1["default"].getMaterials, function (error, results) {
        if (error)
            throw (error);
        res.status(200).json(results.rows);
    });
};
var getMaterialsById = function (req, res) {
    var id = parseInt(req.params.id);
    db_1["default"].query(queries_1["default"].getMaterialsById, [id], function (error, results) {
        if (error)
            throw error;
        res.status(200).json(results.rows);
    });
};
var addMaterial = function (req, res) {
    var _a = req.body, name = _a.name, unit_cost = _a.unit_cost;
    db_1["default"].query(queries_1["default"].checkMaterialExists, [name], function (error, results) {
        if (error)
            res.send(error);
        if (results.rows.length) {
            res.send("Material already exists.");
        }
        db_1["default"].query(queries_1["default"].addMaterial, [name, unit_cost], function (error, results) {
            if (error)
                throw (error);
            res.status(201).send("Material added successfully!");
        });
    });
};
var deleteMaterial = function (req, res) {
    var id = parseInt(req.params.id);
    db_1["default"].query(queries_1["default"].getMaterialsById, [id], function (error, results) {
        var noMaterialFound = !results.rows.length;
        if (error)
            throw error;
        if (noMaterialFound) {
            res.send("Material doesn't exist in database.");
        }
        db_1["default"].query(queries_1["default"].deleteMaterial, [id], function (error, results) {
            if (error)
                throw error;
            res.status(200).send("Material deleted successfully.");
        });
    });
};
var updateMaterialName = function (req, res) {
    var id = parseInt(req.params.id);
    var name = req.body.name;
    db_1["default"].query(queries_1["default"].getMaterialsById, [id], function (error, results) {
        var noMaterialFound = !results.rows.length;
        if (error)
            throw error;
        if (noMaterialFound) {
            res.send("Material doesn't exist in database.");
        }
        db_1["default"].query(queries_1["default"].updateMaterialName, [name, id], function (error, results) {
            if (error)
                throw error;
            res.status(200).send("Material updated successfully.");
        });
    });
};
module.exports = {
    getMaterials: getMaterials,
    getMaterialsById: getMaterialsById,
    addMaterial: addMaterial,
    deleteMaterial: deleteMaterial,
    updateMaterialName: updateMaterialName
};
//# sourceMappingURL=controller.js.map