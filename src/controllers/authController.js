const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('user/loginPage');
})

router.get('/register', (req, res) => {
    res.render('user/registerPage');
})


module.exports = router;