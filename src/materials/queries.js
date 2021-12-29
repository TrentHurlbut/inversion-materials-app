const getMaterials = "SELECT * FROM materials";
//'$1' is a variable in SQL.
const getMaterialsById = "SELECT * FROM materials WHERE id = $1"

module.exports = {
  getMaterials,
  getMaterialsById,
};