const express = require('express');

const router = express.Router();

const loginRouter = require('./login.route');
const middlewares = require('../middlewares');

router.use('/login', middlewares.loginValid, loginRouter);// alterar

module.exports = router;