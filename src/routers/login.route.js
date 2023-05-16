const express = require('express');

const loginRouter = express.Router();

const controllers = require('../controllers');

const middlewares = require('../middlewares');

loginRouter.post('/', middlewares.loginValid, controllers.loginAcess);// Requisito 3

module.exports = loginRouter;