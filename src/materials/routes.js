const { Router } = require('express');
const router = Router();
const controller = require('./controller');

router.get("/", controller.getMaterials);
//':id' becomes a parameter that is passed in by the req variable in controller.js.
router.get("/:id", controller.getMaterialsById);

module.exports = router;