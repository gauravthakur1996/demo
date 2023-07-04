const express = require('express');
const { roomsList } = require('../modules/rooms/roomsListController');
const router = express.Router();

//paths
const roomsListPath = '/list';

const roomsMiddleware = (req,res,next)=>{
    console.log('rooms routes Middleware : ')
    next()
}

router.get(roomsListPath, roomsMiddleware, roomsList)

module.exports = router
