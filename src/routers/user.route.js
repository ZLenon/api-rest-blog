const express = require('express');

const userRouter = express.Router();

const controllers = require('../controllers');

const middlewares = require('../middlewares');

userRouter.post('/', middlewares.tokenValid, middlewares.formValid, controllers.addNewUser);

module.exports = userRouter;