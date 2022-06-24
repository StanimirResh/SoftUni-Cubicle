const User = require('../models/User');

exports.registerUser = (userData) => {
    User.create(userData)
}