"use strict"

const express = require('express')
const router = express.Router()
const bookCtrl = require('../controllers/books');
const helperCtrl = require('../helpers');

router.get('/books',
    bookCtrl.getBooks,
    helperCtrl.response_to_json('books')
)

router.get('/books/:bookId',
    bookCtrl.getBooksById,
    helperCtrl.response_to_json('books')

)

router.post('/books',
    bookCtrl.createBook,
    helperCtrl.response_to_json('books')

)

router.delete('/books/:bookId',
    bookCtrl.getBooksById,
    bookCtrl.deleteBookbyId,
    helperCtrl.response_to_json('books')

)

module.exports = router;