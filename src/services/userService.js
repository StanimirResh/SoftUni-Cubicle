const User = require('../models/User');
const bcrypt = require('bcrypt')

const saltRounds = 5;

exports.registerUser = async (userData) => {
    if (userData.password !== userData.repeatPassword){
        return false
    }

    let hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    return User.create({
        username: userData.username,
        password: userData.password
    })
}