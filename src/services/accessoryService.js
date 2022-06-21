const Accessory = require('../models/Accessory');

exports.create = async (accessory) => {
    Accessory.create(accessory)
}

exports.getAllAccessories = async () => {
    return await Accessory.find().lean();
}

exports.filteredAccessories = async (cube) => {
   return await Accessory.find({_id: {$nin: cube.accessories}}).lean();
}