const cubes = require('../database.json');
const fs = require('fs/promises');

exports.save = async (cube) => {
    cubes.push(cube);
    await fs.writeFile('./src/database.json', JSON.stringify(cubes, '', 2));
}