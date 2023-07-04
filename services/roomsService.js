const mongoose = require('mongoose');
const Room = require('../database/models/roomModel');

module.exports.getRoomsList = async (params) => {
    const perPage = 10
    const page = Math.max(0, params.page)

    return Room.find({}).limit(perPage).skip(perPage * page);
}

module.exports.getRoomDetails = async (roomId)=>{
    return Room.findById({_id:roomId});
}