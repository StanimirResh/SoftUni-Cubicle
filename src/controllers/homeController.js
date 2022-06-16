const router = require('express').Router();
const { getAllCubes } = require('../services/cubeService')

router.get('/', (req, res) => {
    res.render('index', {
        cubes : getAllCubes()
    });
})

module.exports = router;