const express = require("express");
const router = express.Router();
const controller = require(require.main + "/api/controllers/TestData.controller");

router.get("/", controller.index);

module.exports = router;
