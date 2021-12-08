const { Router } = require('express');
const { pagesController } = require('../controllers/pagesController');

const pagesRouter = new Router();

pagesRouter.get('/', pagesController.index);
pagesRouter.get('/login', pagesController.login);
pagesRouter.get('/logup', pagesController.logup);

module.exports = { pagesRouter };