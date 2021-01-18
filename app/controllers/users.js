"use strict"
const User = require('../models/users')

module.exports = {
    mid1: mid1,
    mid2: mid2,
    mid3: mid3,
    createUser: createUser,
    getUsers: getUsers,
    getUsersById: getUsersById,
    deleteUserbyId: deleteUserbyId,
}

function getUsersById(req, res, next){
    console.log('params', req.params)
    const {userId } = req.params

    User.findById({_id: userId}, function(err, result){
        if(err){
            console.log('err', err)
            return res.status(404).json(err)
        }
        req.resources.users = result;
        return next();
    })

}

function getUsers(req, res, next){
    User.find(function(err, result){
        if(err){
            return next(err)
        }
        req.resources.users = result;
        return next();
    })
}

function deleteUserbyId(req, res, next){
    const {userId} = req.params;
    User.deleteOne({_id: userId}, function(err, result){
        if(err){
            return next(err)
        }
        return next();
    })
    
}

function createUser(req, res, next){
    const user = new User(req.body);
    user.save(function(err, result){
        if(err){
            return next(err);
        }
        console.log('result', result)
        return next();
    })
}

function mid1(req, res, next){
    console.log('users', req.query);
    next();
}

function mid2(req, res, next){
    console.log('users', req.query);
    next();
}

function mid3(req, res, next){
    console.log('users', req.query);
    return res.json({text:'Hello GET'});
}

