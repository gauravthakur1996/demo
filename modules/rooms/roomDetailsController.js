const { response } = require("express");
const constant = require("../../constants/constant");
const { getRoomDetails } = require("../../services/roomsService");

module.exports.roomDeatilsController = async (req, res)=>{
    console.log('roomDeatilsController : ', req.params.roomId)
    let response = {};

    try {
        response = constant.apiResponse.success;
        const data = await getRoomDetails(req.params.roomId)
        response.data = data;
        response.message = constant.messages.rooms.roomDetails;
        
    } catch (error) {
        response = constant.apiResponse.error;
        response.message = error.message;
    }


    res.status(response.status).send(response);
}