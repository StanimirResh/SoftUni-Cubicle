const router = require('express').Router();
const { create } = require('../services/accessoryService');
router.get('/create', (req, res) => {
    res.render('createAccessory');
})

router.post('/create', async (req,res) => {
    const accessory = req.body
    await create(accessory)
    res.redirect('/')
})

module.exports = router;
