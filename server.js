"use strict"

const express = require('express');
const { restart } = require('nodemon');
const { setMaxListeners } = require('process');
const app = express();
const config = require('./config/index');

//init configs
require(`./config/express`).initExpress(app);
require(`./config/routes`).initRoutes(app);
require(`./config/mongoose`).initMongoose(app);

app.all('*', function(req, res, next){
    return res.json({
        status: 'error',
        message: `Cant find ${req.url} on this server`
    })
})

app.use(function(err, req, res, next) {
    console.log('error middleware', err);

    return res.status(err.statusCode || 400).json({
        status: 'error',
        message: err && err.message || 'Default error message'
    })
})

app.listen( config.PORT, function () {
    console.log(`App is running on port ${config.PORT}`)
});
