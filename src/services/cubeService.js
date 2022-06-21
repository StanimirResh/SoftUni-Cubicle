const fs = require('fs/promises');
const Cube = require('../models/Cube');

exports.save = async (cube) => {
    Cube.create(cube);
}

exports.getCube = async (id) => {
    return await Cube.findById(id).lean();
}

exports.getAllCubes = () => cubes;