const { getCube } = require('../services/cubeService');

const router = require('express').Router();


router.get('/:id', (req, res) => {
    const cube = getCube(req.params.id);
    
    res.render('details', {
        cube
    })
})

module.exports = router;