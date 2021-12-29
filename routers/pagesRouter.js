const { Router } = require('express');
const { pagesController } = require('../controllers/pagesController');

const pagesRouter = new Router();

pagesRouter.get('/login', pagesController.login);
pagesRouter.get('/logup', pagesController.logup);
pagesRouter.get('/', pagesController.index);

module.exports = { pagesRouter };