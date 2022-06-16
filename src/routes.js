const router = require('express').Router();

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const createController = require('./controllers/createController');
const notFoundController = require('./controllers/notFoundController');

router.get('/', homeController)
router.get('/about', aboutController);
router.all('/create', createController);
router.all('*', notFoundController);

module.exports = router;