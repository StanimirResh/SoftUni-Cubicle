const router = require('express').Router();
const fs = require('fs/promises');
const cubes = require('../database.json');


router.get('/', (req, res) => {
    res.render('create');
})

router.post('/', (req, res) => {
    const cube = req.body;
    cubes.push(cube);

    fs.writeFile('./src/database.json', JSON.stringify(cubes, '', 2));

    res.redirect('/');
})

module.exports = router;
