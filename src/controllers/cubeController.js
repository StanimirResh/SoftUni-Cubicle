const { save, getCube } = require('../services/cubeService');
const cubes = require('../database.json');

const router = require('express').Router();


router.get('/create', (req, res) => {
    console.log(cubes);
    res.render('create');
})

router.post('/create', async (req, res) => {
    const cube = req.body;
    await save(cube);
    res.redirect('/');
})

router.get('/details/:id', (req, res) => {
    const cube = getCube(req.params.id);
    
    res.render('details', {
        cube
    })
})

module.exports = router;
