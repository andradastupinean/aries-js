"use strict"

const { Console } = require('console');
const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users');
const helperCtrl = require('../helpers');

router.get('/users',
    userCtrl.getUsers,
    helperCtrl.response_to_json('users')
)

router.get('/users/:userId',
    userCtrl.getUsersById,
    helperCtrl.response_to_json('users')

)

router.post('/users',
    userCtrl.createUser,
    helperCtrl.response_to_json('users')

)

router.delete('/users/:userId',
    userCtrl.getUsersById,
    userCtrl.deleteUserbyId,
    helperCtrl.response_to_json('users')

)

router.put('/users',function(req, res, next){
    console.log('users', req.query);
    return res.json({text:'Hello PUT'});
})

module.exports = router;