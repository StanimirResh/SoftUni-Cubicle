const jwt = require('jsonwebtoken')
const {
    saltRounds,
    secret
} = require('../constants.js')

exports.auth = (req, res, next) => {
    let token = req.cookies.Session;

    if (token) {
        try {
            let decodedToken = jwt.verify(token, secret);
            req.user = decodedToken
            res.locals.userToken = decodedToken
        } catch (err) {
            return res.redirect('/404');
        }
    }
    next();
}

exports.isUser = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/404');
    }

    next();
}