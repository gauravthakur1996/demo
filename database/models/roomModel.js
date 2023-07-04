const mongoose = require('mongoose');
MONGODB_ROOMS_URL = 'mongodb+srv://gauravt31011996:JMHgn5cHqpMb27PC@cluster0.e6nnbxc.mongodb.net/sample_airbnb?retryWrites=true&w=majority'
const conn     = mongoose.createConnection(MONGODB_ROOMS_URL);

const roomsSchema = new mongoose.Schema({_id:String},{
    timestamps: true,
    collection: 'listingsAndReviews'
})

module.exports = conn.model('Room', roomsSchema);