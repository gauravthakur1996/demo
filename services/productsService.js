const Product = require('../database/models/productModel')

module.exports.createProduct = async (product)=>{
    try {
        const data = new Product({...product});
        return await data.save();
    } catch (error) {
        console.log('Something went wrong: product service: createProduct: ', error)
        throw new Error(error)
    }
}