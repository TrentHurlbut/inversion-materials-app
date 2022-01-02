"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = (0, express_1.Router)();
var controller = require('./controller');
router.get("/", controller.getMaterials);
router.post("/", controller.addMaterial);
router.get("/:id", controller.getMaterialsById);
router["delete"]("/:id", controller.deleteMaterial);
router.put("/:id", controller.updateMaterialName);
exports["default"] = router;
//# sourceMappingURL=routes.js.map