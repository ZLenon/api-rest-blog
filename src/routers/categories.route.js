const express = require('express');

const categoriesRouter = express.Router();

const controllers = require('../controllers');

const middlewares = require('../middlewares');

categoriesRouter.post(
'/', 
middlewares.tokenValid,
middlewares.nameValid,
controllers.categoriesCreation,
);// Requisito 8

module.exports = categoriesRouter;