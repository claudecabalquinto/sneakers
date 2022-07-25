const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const sneakerSchema = new Schema ({
    brand: {
        type: String,
        enum: ['nike', 'adidas', 'yeezy', 'vans']
    },
    name: {
        type: String,
    },
    colorWay: {
        type: String,
    },
    releaseYear: {
        type: Number,
    },
});

mongoose.exports =  mongoose.model('Sneaker', sneakerSchema)