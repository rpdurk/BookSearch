// require db from model
const db = require("../models");

// methods for all book functions
module.exports = {

//   add a book to the db
  create: (req, res) => {
    try {
     db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
    } catch (e) {
        console.log('L:13 BookController', e);
        res.status(401).json(e)
      }
  },
    // find all books
  findAll: (req, res) => {
    try {
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
    } catch (e) {
        console.log('L:23 BookController', e);
        res.status(401).json(e)
      }
  },
//   find all books by their id
  findById: (req, res) => {
    try {
    db.Book.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
    } catch (e) {
        console.log('L:33 BookController', e);
        res.status(401).json(e)
      }
  },

// update a book from their db
  updateBook: (req, res) => {
    try {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
    } catch (e) {
        console.log('L:44 BookController', e);
        res.status(401).json(e)
      }
  },
// delete book from their db
  remove: (req, res) => {
    try {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
    } catch (e) {
        console.log('L:55 BookController', e);
        res.status(401).json(e)
      }
  }
};