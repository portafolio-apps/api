// src/routes/index.js
const express = require("express");
const router = express.Router();

router.use("/members", require("./members"));
router.use("/clubinfo", require("./clubinfo"));

module.exports = router;
