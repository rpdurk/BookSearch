// require db from model
const db = require("../models");

// methods for all book functions
module.exports = {
  //   add a book to the db
  create: function (req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch((e) => res.status(401).json(e));
      console.log('Book Controller error', e);
  },
  // find all books
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then((dbBook) => res.json(dbBook))
      .catch((e) => res.status(401).json(e));
      console.log('Book Controller error', e);
  },
  //   find all books by their id
  findById: function (req, res) {
    db.Book.findById(req.params.id)
      .then((dbBook) => res.json(dbBook))
      .catch((e) => res.status(401).json(e));
      console.log('Book Controller error', e);
  },

  // update a book from their db
  update: function (req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then((dbBook) => res.json(dbBook))
      .catch((e) => res.status(401).json(e));
      console.log('Book Controller error', e);
  },
  // delete book from their db
  remove: function (req, res) {
    db.Book.findById(req.params.id)
      .then((dbBook) => dbBook.remove())
      .then((dbBook) => res.json(dbBook))
      .catch((e) => res.status(401).json(e));
      console.log('Book Controller error', e);
  },
};