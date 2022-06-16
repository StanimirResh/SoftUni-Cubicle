const router = require('express').Router();
const fs = require('fs/promises');
const cubes = require('../database.json');


router.get('/create', (req, res) => {
    res.render('create');
})

router.post('/create', (req, res) => {
    const cube = req.body;
    cubes.push(cube);

    fs.writeFile('./src/database.json', JSON.stringify(cubes, '', 2));

    res.redirect('/');
})

module.exports = router;
