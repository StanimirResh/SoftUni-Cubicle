const router = require('express').Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');
const aboutController = require('./controllers/aboutController');
const notFoundController = require('./controllers/notFoundController');

router.get('/', homeController)
router.use('/about', aboutController);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController);
router.use('/user', authController)
router.use('*', notFoundController);
router.use('/404', notFoundController);

module.exports = router;