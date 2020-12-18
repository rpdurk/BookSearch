const router = require("express").Router();
const googleController = require("../../controllers/googleSearchController");

// actual route = "/api/google"
router
  .route("/")
  .get(googleController.findAll);

module.exports = router;
