const productService = require('../../services/productsService');
const constant = require('../../constants/constant')

module.exports.createProduct = async (req, res, next)=>{
    const response = {};
    try {
        console.log('createProduct : req.body : ', req.body)
        const data = await productService.createProduct(req.body);
        response = constant.apiResponse.success;
        response.data = data;
        response.message = constant.messages.products.create; 
    } catch (error) {
        response = constant.apiResponse.error;
        response.message = error.message;
        console.log('Something went wrong: product contrller: createProduct: ', error)
        throw new Error(error);
    }

    res.status(response.status).send(response)
}