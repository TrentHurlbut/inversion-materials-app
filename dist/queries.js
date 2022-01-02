"use strict";
var getMaterials = "SELECT * FROM materials";
var getMaterialsById = "SELECT * FROM materials WHERE id = $1";
var checkMaterialExists = "SELECT m FROM materials m WHERE m.name = $1";
var addMaterial = "INSERT INTO materials (name, unit_cost) VALUES ($1, $2)";
var deleteMaterial = "DELETE FROM materials WHERE id = $1";
var updateMaterialName = "UPDATE materials SET name = $1 WHERE id = $2";
module.exports = {
    getMaterials: getMaterials,
    getMaterialsById: getMaterialsById,
    checkMaterialExists: checkMaterialExists,
    addMaterial: addMaterial,
    deleteMaterial: deleteMaterial,
    updateMaterialName: updateMaterialName
};
//# sourceMappingURL=queries.js.map