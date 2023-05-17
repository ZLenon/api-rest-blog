const express = require('express');

const postcategories = express.Router();

const controllers = require('../controllers');

const middlewares = require('../middlewares');

postcategories.post('/', middlewares.tokenValid, middlewares.postValid, controllers.insertBlogPost);// Requisito 12

module.exports = postcategories;