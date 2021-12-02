const { Router } = require('express');
const { authController } = require('../controllers/authController');

const authRouter = new Router();

authRouter.post('/login', authController.loginUser);

module.exports = { authRouter };