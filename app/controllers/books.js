"use strict"
const Book = require('../models/books')

module.exports = {
    createBook: createBook,
    getBooks: getBooks,
    getBooksById: getBooksById,
    deleteBookbyId: deleteBookbyId,
}

function getBooksById(req, res, next){
    console.log('params', req.params)
    const {bookId } = req.params

    Book.findById({_id: bookId}, function(err, result){
        if(err){
            console.log('err', err)
            return res.status(404).json(err)
        }
        req.resources.books = result;
        return next();
    })

}

function getBooks(req, res, next){
    Book
        .find()
        .populate('userId', 'email')
        .exec(function(err, result){
            if(err){
                return next(err)
            }
            req.resources.books = result;
            return next();
        })


}

function deleteBookbyId(req, res, next){
    const {bookId} = req.params;
    Book.deleteOne({_id: bookId}, function(err, result){
        if(err){
            return next(err)
        }
        return next();
    })
    
}

function createBook(req, res, next){
    console.log('bsdksf')
    const book = new Book(req.body);
    console.log('req.body', req.body)
   
    book.save(function(err, result){
        if(err){
            return next(err)
        }
        console.log('result', result)
        return next();
    })
}


