// src/routes/index.js
const express = require("express");
const router = express.Router();

router.use("/members", require("./members"));

module.exports = router;