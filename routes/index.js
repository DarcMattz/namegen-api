const express = require("express");
const router = express.Router();

const nameRoutes = require("./nameRoutes");

// Mount all routes
router.use("/", nameRoutes);

module.exports = router;
