const { Router } = require('express');
const { categoryController } = require('../controllers/categoryController');

const categoryRouter = new Router();

categoryRouter.post('/', categoryController.addCategory);
categoryRouter.get('/', categoryController.getCategories);

module.exports = { categoryRouter };