const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// actual route = "/api/books"
router.route("/")
  // find books
  .get(bookController.findAll)
  // create books in save
  .post(bookController.create);

// actual route = "/api/books/:id"
router
  .route("/:id")
  // gets book by Id
  .get(bookController.findById)
  // updates book to save
  .put(bookController.update)
  // deletes book from saved
  .delete(bookController.remove);

module.exports = router;