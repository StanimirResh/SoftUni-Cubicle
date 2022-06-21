const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function() {
                return this.imageUrl.startsWith('http')
            },
            message: 'Image url should begin with http/https'
        }
    }
})

// accessorySchema.path('imageUrl').validate(function() {
//     return this.imageUrl.startsWith('http');
// }, 'Image url should begin with http/https');

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;