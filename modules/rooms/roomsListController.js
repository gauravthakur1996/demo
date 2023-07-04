const roomsService = require('../../services/roomsService');
const constant = require('../../constants/constant')

module.exports.roomsListController = async (req, res, next)=>{
    let response = {};

    try {
        // const params = {
        //     page: 
        // }
        // console.log('roomsList : req.body : ', req.query)
        console.log('roomsList : req.query : ', req.query)
        let data = await roomsService.getRoomsList(req.query);
        console.log('roomsList : data: ', data)
        response = constant.apiResponse.success;
        response.count = data.length
        response.data = data;
        response.message = constant.messages.rooms.list; 
    } catch (error) {
        response = constant.apiResponse.error;
        response.message = error.message;
        console.log('Something went wrong: rooms contrller: rooms list: ', error)
        throw new Error(error);
    }

    res.status(response.status).send(response)
}