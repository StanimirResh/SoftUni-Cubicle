const router = require('express').Router();

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const createController = require('./controllers/createController');

router.get('/', homeController)
router.get('/about', aboutController);
router.get('/create', createController);

module.exports = router;