const { Router } = require('express');
const { authController } = require('../controllers/authController');

const authRouter = new Router();

authRouter.get('/signin', authController.getSignIn);
authRouter.get('/signup', authController.getSignUp);
//authRouter.post('/login', authController.loginUser);

module.exports = { authRouter };