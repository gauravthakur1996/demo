const express = require('express');
const { roomsListController } = require('../modules/rooms/roomsListController');
const { roomDeatilsController } = require('../modules/rooms/roomDetailsController');
const router = express.Router();

//paths
const roomsListPath = '/list';
const roomDetailsPath = '/:roomId/details'

const roomsMiddleware = (req,res,next)=>{
    console.log('rooms routes Middleware : ')
    next()
}

router.get(roomsListPath, roomsMiddleware, roomsListController);
router.get(roomDetailsPath, roomsMiddleware, roomDeatilsController);

module.exports = router
