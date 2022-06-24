const router = require('express').Router();
const {registerUser} = require('../services/userService')

router.get('/login', (req, res) => {
    res.render('user/loginPage');
})

router.get('/register', (req, res) => {
    res.render('user/registerPage');
})

router.post('/register', async (req, res) => {
    await registerUser(req.body)
    res.redirect('/')
})


module.exports = router;