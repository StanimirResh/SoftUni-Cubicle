const {
    getCube,
    getPopulatedCube,
    attachAccessory,
    save
} = require('../services/cubeService');


exports.isOwner = (req,res,next) => {
    let cube = getCube(req.params.cubeId);
    if(req.params.cubeId == req.user._id){

    }
}