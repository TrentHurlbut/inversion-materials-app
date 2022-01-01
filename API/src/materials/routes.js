const { Router } = require('express');
const router = Router();
const controller = require('./controller');

router.get("/", controller.getMaterials);
//post route
router.post("/", controller.addMaterial);
//':id' becomes a parameter that is passed in by the req variable in controller.js.
router.get("/:id", controller.getMaterialsById);
//Routes can take only one kind of each method.
router.delete("/:id", controller.deleteMaterial);
router.put("/:id", controller.updateMaterialName);

module.exports = router;