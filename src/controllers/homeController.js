const router = require('express').Router();
const cubes = require('../database.json');

router.get('/', (req, res) => {
    res.render('index', {
        cubes
    });
})

module.exports = router;