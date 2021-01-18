"use strict"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const bookSchema = new Schema ({
    author: {
        createdAt: Number,
        updatedAt: Number,
        type: String,
        required: [true, 'the author'],
        unique: true
    },
    name:{
        type: String,
        required: true,
        unique: false
    },
    userId: {
        type: ObjectId,
        ref: 'user',
        required: true
    },
    reviews: [
        {
            description: {
                type: String
            },
            rate: {
                type: Number
            }
        }
    ]


}, {timestamps:{currentTime: () => new Date().getTime() } })

module.exports =mongoose.model('book', bookSchema, 'books');