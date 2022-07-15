const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {saltRounds, secret} = require('../constants.js')
exports.registerUser = async (userData) => {
    if (userData.password !== userData.repeatPassword) {
        return false
    }

    let hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    let user = User.create({
        username: userData.username,
        password: hashedPassword
    })

    const token = jwt.sign({
        _id: curUser._id,
        username: curUser.username
    }, secret, {
        expiresIn: '2d'
    })

    return token;

}

exports.loginUser = async (userData) => {
    let curUser = await User.findOne({
        username: userData.username
    });
    console.log(curUser);
    if (!curUser) {
        return false;
    }

    let isPassValid = await bcrypt.compare(userData.password, curUser.password);

    if (!isPassValid) {
        return false;
    }

    const token = jwt.sign({
        _id: curUser._id,
        username: curUser.username
    }, secret, {
        expiresIn: '2d'
    })

    console.log(token);
    return token;
}