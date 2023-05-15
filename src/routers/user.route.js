const express = require('express');

const userRouter = express.Router();

const controllers = require('../controllers');

const middlewares = require('../middlewares');

userRouter.get('/', middlewares.tokenValid, controllers.findAllUsers);// Requisito 5 
userRouter.get('/:id', middlewares.tokenValid, controllers.findByUserID);// Requisito 6 
userRouter.post('/', middlewares.tokenValid, middlewares.formValid, controllers.addNewUser);// Requisito 3

module.exports = userRouter;