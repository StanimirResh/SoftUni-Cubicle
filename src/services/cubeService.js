const cubes = require('../database.json');
const fs = require('fs/promises');

exports.save = async (cube) => {
    cube.id = cubes.length;
    cubes.push(cube);
    await fs.writeFile('./src/database.json', JSON.stringify(cubes, '', 2));
}

exports.getCube = (id) => {
    return cubes[id];
}