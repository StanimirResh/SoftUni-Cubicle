const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

exports.save = async (cube) => {
    Cube.create(cube);
}

exports.getCube = async (id) => {
    return await Cube.findById(id).lean();
}

exports.getPopulatedCube = async (id) => {
    return await Cube.findById(id).populate('accessories').lean();
}


exports.search = async (query) => {
    let search = query.search;
    let fromDifficulty = query.from;
    let toDifficulty = query.to;

    let cubes = await Cube.find().lean();

    if (search || fromDifficulty || toDifficulty) {
        if (fromDifficulty == '') {
            fromDifficulty = 0
        }
        if (toDifficulty == '') {
            toDifficulty = 6
        }

        return cubes.filter(x => {
            if (x.difficulty >= fromDifficulty && x.difficulty <= toDifficulty) {
                if (x.name.toLowerCase().includes(search.toLowerCase())) {
                    return -1;
                }
            }
        })
    } else {
        return cubes;
    }
}

exports.attachAccessory = async (cubeId, accessoryId) => {
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);
    console.log(cube);
    console.log(accessory);

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();
}

exports.editCube = async (cubeId, cubeInfo) => {
    return Cube.findByIdAndUpdate(cubeId, {cubeInfo});
}