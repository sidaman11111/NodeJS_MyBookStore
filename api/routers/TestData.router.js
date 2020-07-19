const express = require("express");
const router = express.Router();
const controller = require(__dirname + "/api/controllers/TestData.controller");

router.get("/", controller.index);

module.exports = router;
