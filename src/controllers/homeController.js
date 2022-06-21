const router = require('express').Router();
const {
    search
} = require('../services/cubeService');

router.get('/', async (req, res) => {
    let query = req.query;
    res.render('index', {
        cubes: await search(query)
    });
})

module.exports = router;