const { save } = require('../services/cubeCreationService');

const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('create');
})

router.post('/', async (req, res) => {
    const cube = req.body;
    await save(cube);
    res.redirect('/');
})

module.exports = router;
