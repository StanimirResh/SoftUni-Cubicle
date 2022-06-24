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

router.get('/edit/:cubeId', async (req, res) => {
    let cube = await getCube(req.params.cubeId)

    if (!cube) {
        res.redirect('/404');
    }

    res.render('editCube', {
        cube
    });
})

router.post('/edit/:cubeId', (req, res) => {
    let modifiedCube = editCube(req.params.cubeId, req.body)
     
    res.redirect(`/cube/details/${cube._id}`);
})

module.exports = router;