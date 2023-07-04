const mongoose = require('mongoose');

const roomsSchema = new mongoose.Schema({},{
    timestamps: true,
    collection: 'listingsAndReviews'
})


module.exports = mongoose.model('Room', roomsSchema);