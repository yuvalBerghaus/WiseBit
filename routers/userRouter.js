const { Router } = require('express');
const { userController } = require('../controllers/userController');

const userRouter = new Router();

userRouter.get('/:userId', userController.getUser);
userRouter.get('/', userController.getUsers);

module.exports = { userRouter };