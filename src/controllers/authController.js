const router = require('express').Router();
const {
    registerUser,
    loginUser
} = require('../services/userService')

router.get('/login', (req, res) => {
    res.render('user/loginPage');
})

router.post('/login', async (req, res) => {
    let user = await loginUser(req.body);
    if (!user) {
        res.redirect('/404')
    }
    res.redirect('/');
})

router.get('/register', (req, res) => {
    res.render('user/registerPage');
})

router.post('/register', async (req, res) => {
    let user = await registerUser(req.body)

    if (!user) {
        res.redirect('/404')
    }

    res.redirect('/')
})


module.exports = router;