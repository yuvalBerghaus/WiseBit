const { Router } = require('express');
const { authController } = require('../controllers/authController');

const authRouter = new Router();

authRouter.post('/signin', authController.loginUser);
authRouter.post('/signup', authController.logupUser);
authRouter.get('/logout', authController.logout);

module.exports = { authRouter };