const router = require('express').Router();
const {
    registerUser,
    loginUser
} = require('../services/userService')

router.get('/login', (req, res) => {
    res.render('user/loginPage');
})

router.post('/login', async (req, res) => {
    let token = await loginUser(req.body);

    if (!token) {
        res.redirect('/404')
    }
    
    res.cookie('Session', token);
    res.redirect('/');
})

router.get('/register', (req, res) => {
    res.render('user/registerPage');
})

router.post('/register', async (req, res) => {
    let token = await registerUser(req.body)
 
    if (!token) {
        res.redirect('/404')
    }

    res.cookie('Session', token)

    res.redirect('/')
})

router.get('/logout', (req,res) => {
    res.clearCookie('Session');
    res.redirect('/')
})


module.exports = router;