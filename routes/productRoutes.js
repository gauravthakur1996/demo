const express = require('express');
const router = express.Router();
const createProductController = require('../modules/products/createProductController.js')
const productsListController = require('../modules/products/productsListController.js')

router.get('/list', productsListController.productList)
router.post('/create', createProductController.createProduct)


module.exports = router;