"use strict"



const mongoose = require('mongoose')

module.exports = {
    initMongoose: initMongoose,
}

function initMongoose(){
    mongoose.connect('mongodb://127.0.0.1:27017/aries-js', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

const db = mongoose.connection;

db.on('error', function(err){
    console.log('err', err)
})

db.once('open', function(err){
    console.log('connected to mongoDB')
})

