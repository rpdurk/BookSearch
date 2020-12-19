const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// API - Append /API
router.use("/api", apiRoutes);

// If no API routes are hit, send to app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
