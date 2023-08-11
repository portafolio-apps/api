// src/routes/index.js
const express = require("express");
const router = express.Router();

router.use("/miembros", require("./miembros"));

module.exports = router;