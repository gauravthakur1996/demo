const { response } = require('express');
const productService = require('../../services/productsService');

module.exports.createProduct = async (req, res, next)=>{
    const response = {};
    try {
        console.log('createProduct : req.body : ', req.body)
        const res = await productService.createProduct(req.body);
        response.status = 200;
        response.data = res;
        response.message = 'Product created successfully.' 
        
    } catch (error) {
        response.status = 400;
        response.data = res;
        response.message = error.message;
        console.log('Something went wrong: product contrller: createProduct: ', error)
        throw new Error(error);
    }

    res.status(response.status).send(response)
}