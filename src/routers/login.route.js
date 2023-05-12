const express = require('express');

const loginRouter = express.Router();

const controllers = require('../controllers');

loginRouter.post('/', controllers.loginAcess);

module.exports = loginRouter;