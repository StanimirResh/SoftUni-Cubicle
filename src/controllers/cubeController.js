const {
    filteredAccessories,
    getAllAccessories
} = require('../services/accessoryService');
const {
    getCube,
    getPopulatedCube,
    attachAccessory,
} = require('../services/cubeService');
const mongoose = require('mongoose');

const router = require('express').Router();


router.get('/create', (req, res) => {
    res.render('createCube');
})

router.post('/create', async (req, res) => {
    const cube = req.body;
    await save(cube);
    res.redirect('/');
})

router.get('/details/:id', async (req, res) => {
    const cube = await getPopulatedCube(req.params.id);

    res.render('details', {
        cube
    })
})

router.get('/attach/:cubeId', async (req, res) => {
    let cube = await getCube(req.params.cubeId);
    let accessories = await getAllAccessories();
    accessories = await filteredAccessories(cube)
    res.render('attachAccessory', {
        cube,
        accessories
    });
})

router.post('/attach/:cubeId', async (req, res) => {
    await attachAccessory(req.params.cubeId, req.body.accessory)
    res.redirect(`/cube/details/${req.params.cubeId}`)
})

router.get('/edit/:cubeId', (req,res) => {
    res.render('editCube');
})

module.exports = router;