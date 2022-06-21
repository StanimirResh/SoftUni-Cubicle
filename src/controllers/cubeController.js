const { save, getCube } = require('../services/cubeService');

const router = require('express').Router();


router.get('/create', (req, res) => {
    res.render('createCube');
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
