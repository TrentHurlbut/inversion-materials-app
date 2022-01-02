declare const getMaterials = "SELECT * FROM materials";
declare const getMaterialsById = "SELECT * FROM materials WHERE id = $1";
declare const checkMaterialExists = "SELECT m FROM materials m WHERE m.name = $1";
declare const addMaterial = "INSERT INTO materials (name, unit_cost) VALUES ($1, $2)";
declare const deleteMaterial = "DELETE FROM materials WHERE id = $1";
declare const updateMaterialName = "UPDATE materials SET name = $1 WHERE id = $2";
