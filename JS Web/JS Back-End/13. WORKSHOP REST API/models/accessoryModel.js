const mongoose = require('mongoose');
const { model } = require('./cubeModel');

const AccessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000,
    },
    imageUrl: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(url){
        //         return url.startsWith('http://') || url.startsWith('htts://');
        //     },
        //     message: 'Image url is not valid'
        // }
    },
    cubes: [{
        type: 'ObjectId',
        ref: 'Cube'
    }]
})

module.exports = mongoose.model('Accessory', AccessorySchema);