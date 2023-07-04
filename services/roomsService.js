const mongoose = require('mongoose');
const Room = require('../database/models/roomModel')
const MONGODB_URL = 'mongodb+srv://gauravt31011996:JMHgn5cHqpMb27PC@cluster0.e6nnbxc.mongodb.net/sample_airbnb?retryWrites=true&w=majority'
// const con = mongoose.createConnection(process.env.MONGODB_URL, {useNewUrlParser: true});



module.exports.getRoomsList = async (params) => {
    const perPage = 10
    const page = Math.max(0, params.page)
    let response = Room.find({}).limit(perPage).skip(perPage * page);


    // let response = Room.find({}).limit(1)

    return response;
}