const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      match: /.{10,}/
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

const sneakerSchema = new Schema({
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
    reviews: [reviewSchema]
    },
});

module.exports =  mongoose.model('Sneaker', sneakerSchema)