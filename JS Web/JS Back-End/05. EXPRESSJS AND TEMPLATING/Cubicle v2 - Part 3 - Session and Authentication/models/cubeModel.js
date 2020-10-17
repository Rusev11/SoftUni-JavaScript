const mongoose = require("mongoose");

const CubeSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    imageUrl: {
        type: String,
        requiered: true,
        // validate: {
        //     validator: function(url){
        //         return url.startsWith('http://') || url.startsWith('htts://');
        //     },
        //     message: 'Image url is not valid'
        // }
    },
    difficulty: {
        type: Number,
        requiered: true,
        min: 1,
        max: 6
    },
    accessories: [{
        type: 'ObjectId',
        ref: 'Accessory'
    }],
    creatorId: {
        type: 'ObjectId',
        ref: 'User'
    }
});

module.exports = mongoose.model('Cube', CubeSchema);