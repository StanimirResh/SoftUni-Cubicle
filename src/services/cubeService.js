const fs = require('fs/promises');
const Cube = require('../models/Cube');

exports.save = async (cube) => {
    Cube.create(cube);
}

exports.getCube = (id) => {
    return Cube.findById(id)
}

exports.getAllCubes = () => cubes;