// require db from model
const db = require("../models");

// methods for all book functions
module.exports = {

//   add a book to the db
  create: async (req, res) => {
    try {
    const addBook = await db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
    } catch (e) {
        console.log('L:13 BookController', e);
        res.status(401).json(e)
      }
  },
    // find all books
  findAll: async (req, res) => {
    try {
    const findBooks = await db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
    } catch (e) {
        console.log('L:23 BookController', e);
        res.status(401).json(e)
      }
  },
//   find all books by their id
  findById: async (req, res) => {
    try {
    const findBookById = await db.Book.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
    } catch (e) {
        console.log('L:33 BookController', e);
        res.status(401).json(e)
      }
  },

// update a book from their db
  updateBook: async (req, res) => {
    try {
    const updateBook = await db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
    } catch (e) {
        console.log('L:44 BookController', e);
        res.status(401).json(e)
      }
  },
// delete book from their db
  remove: async (req, res) => {
    try {
    const updateBook = await db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
    } catch (e) {
        console.log('L:55 BookController', e);
        res.status(401).json(e)
      }
  }
};