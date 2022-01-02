"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = (0, express_1.Router)();
var controller_1 = require("./controller");
router.get("/", controller_1["default"].getMaterials);
router.post("/", controller_1["default"].addMaterial);
router.get("/:id", controller_1["default"].getMaterialsById);
router["delete"]("/:id", controller_1["default"].deleteMaterial);
router.put("/:id", controller_1["default"].updateMaterialName);
exports["default"] = router;
//# sourceMappingURL=routes.js.map