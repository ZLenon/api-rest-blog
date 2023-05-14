const express = require('express');

const router = express.Router();

const loginRouter = require('./login.route');
const userRouter = require('./user.route');

router.use('/login', loginRouter);
router.use('/user', userRouter);

module.exports = router;