const express = require('express');

const router = express.Router();

const loginRouter = require('./login.route');
const userRouter = require('./user.route');
const categoriesRouter = require('./categories.route');
const postcategories = require('./postcategories.route');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoriesRouter);
router.use('/post', postcategories);

module.exports = router;