const getMaterials = "SELECT * FROM materials";
//'$1' is a variable in SQL.
const getMaterialsById = "SELECT * FROM materials WHERE id = $1";
const checkMaterialExists = "SELECT m FROM materials m WHERE m.name = $1";
const addMaterial = "INSERT INTO materials (name, unit_cost) VALUES ($1, $2)";
const deleteMaterial = "DELETE FROM materials WHERE id = $1";

module.exports = {
  getMaterials,
  getMaterialsById,
  checkMaterialExists,
  addMaterial,
  deleteMaterial
};