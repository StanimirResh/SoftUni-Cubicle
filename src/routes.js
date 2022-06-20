const router = require('express').Router();

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const cubeController = require('./controllers/cubeController');
const notFoundController = require('./controllers/notFoundController');

router.get('/', homeController)
router.use('/about', aboutController);
router.use('/cube', cubeController);
router.use('*', notFoundController);

module.exports = router;