const {
    filteredAccessories,
    getAllAccessories
} = require('../services/accessoryService');
const {
    getCube,
    getPopulatedCube,
    attachAccessory,
    save
} = require('../services/cubeService');
const {
    isUser
} = require('../middlewares/authMiddleware')
const mongoose = require('mongoose');

const router = require('express').Router();


router.get('/create', isUser, (req, res) => {
    res.render('createCube');
})

router.post('/create', isUser, async (req, res) => {
    const cube = req.body;

    cube.owner = req.user._id;
    
    await save(cube);
    res.redirect('/');
})

router.get('/details/:id', async (req, res) => {
    const cube = await getPopulatedCube(req.params.id);
    let isOwner = cube.owner == req.user?._id
    
    res.render('details', {
        cube, isOwner
    })

})

router.get('/attach/:cubeId', async (req, res) => {
    let cube = await getCube(req.params.cubeId);
    if (cube.owner != req.user._id) {
        res.redirect('/404')
    }
    let accessories = await getAllAccessories();
    accessories = await filteredAccessories(cube)
    res.render('attachAccessory', {
        cube,
        accessories
    });
})

router.post('/attach/:cubeId',isUser, async (req, res) => {
    await attachAccessory(req.params.cubeId, req.body.accessory)
    res.redirect(`/cube/details/${req.params.cubeId}`)
})

router.get('/edit/:cubeId', async (req, res) => {
    let cube = await getCube(req.params.cubeId)
    if (cube.owner != req.user._id) {
        res.redirect('/404')
    }
    if (!cube) {
        res.redirect('/404');
    }

    res.render('editCube', {
        cube
    });
})

router.post('/edit/:cubeId',isUser, (req, res) => {
    let modifiedCube = editCube(req.params.cubeId, req.body)
    if (cube.owner != req.user._id) {
        res.redirect('/404')
    }

    res.redirect(`/cube/details/${cube._id}`);
})

router.get('/delete/:cubeId')

module.exports = router;