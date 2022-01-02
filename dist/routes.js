"use strict";
var Router = require('express').Router;
var router = Router();
var controller = require('./controller');
router.get("/", controller.getMaterials);
router.post("/", controller.addMaterial);
router.get("/:id", controller.getMaterialsById);
router["delete"]("/:id", controller.deleteMaterial);
router.put("/:id", controller.updateMaterialName);
module.exports = router;
//# sourceMappingURL=routes.js.map