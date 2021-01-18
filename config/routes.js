"use strict"

const path = require('path');

module.exports = {
    initRoutes: initRoutes,
}

function initRoutes(app){
    const routePath = path.join(__dirname, '../app/routes');
    const routes = ['users','books'];

    routes.forEach(function(route){
        const finalPatch = `${routePath}/${route}`
        console.log('route', route)
        app.use(require(finalPatch));
    })
}