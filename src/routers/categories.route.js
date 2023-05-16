const express = require('express');

const categoriesRouter = express.Router();

const controllers = require('../controllers');

const middlewares = require('../middlewares');

categoriesRouter.get('/', middlewares.tokenValid, controllers.findAllCategories);// Requisito 9
categoriesRouter.post(
'/', 
middlewares.tokenValid,
middlewares.nameValid,
controllers.categoriesCreation,
);// Requisito 8

module.exports = categoriesRouter;