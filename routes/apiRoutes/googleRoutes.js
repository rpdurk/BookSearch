const router = require("express").Router();
const googleSearchController = require("../../controllers/googleSearchController");

// actual route = "/api/google"
router
  .route("/")
  .get(googleSearchController.findAll);

module.exports = router;
