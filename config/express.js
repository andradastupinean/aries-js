"use strict"

var bodyParser = require('body-parser')
var methodOverride = require('method-override')

module.exports = {
    initExpress: initExpress
}

function initExpress(app){
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())
    app.use(methodOverride())

    app.use(function(req, rest, next){
        console.log('InitExpress', req.resources);
        req.resources = req.resources || {};
        next();
    })
}