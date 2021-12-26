const { Router } = require('express');
const { categoryController } = require('../controllers/categoryController');

const categoryRouter = new Router();

categoryRouter.post('/', categoryController.addCategory);

module.exports = { categoryRouter };