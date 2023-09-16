// Init Lib
const express = require('express');
const {
    createUserController,
    udateUserController,
    getUserController,
    deleteUserController,
} = require('../Controller/userController');
const { validate, addUserValidation, updateUserValidation } = require('../Common/Validate');

const route = express.Router();

module.exports.userRoute = function () {
    route.get('/getAllUsers', getUserController)
    route.post('/createUser', validate(addUserValidation), createUserController)
    route.put('/updateUser/:id', validate(updateUserValidation), udateUserController)
    route.delete('/deleteUser/:id', deleteUserController)
    return route;
}