const { save } = require('../services/cubeService');
const cubes = require('../database.json');

const router = require('express').Router();


router.get('/', (req, res) => {
    console.log(cubes);
    res.render('create');
})

router.post('/', async (req, res) => {
    const cube = req.body;
    await save(cube);
    res.redirect('/');
})

module.exports = router;
