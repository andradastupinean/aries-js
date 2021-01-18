"use strict"

module.exports ={
    getCurrentDate: getCurrentDate,
    response_to_json: response_to_json
}

function getCurrentDate(){
    return new Date();
}

function response_to_json(propItem){
    console.log('response to json')
    return function(req, res, next){
        res.json(req.resources[propItem])
    }

}