const router = require('express').Router();
const { search } = require('../services/searchService');

router.get('/', (req, res) => {
    let query = req.query;

    res.render('index', {
        cubes : search(query)
    });
})

module.exports = router;