const router = require('express').Router();

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const createController = require('./controllers/createController');
const notFoundController = require('./controllers/notFoundController');

router.get('/', homeController)
router.use('/about', aboutController);
router.use('/create', createController);
router.use('*', notFoundController);

module.exports = router;