const getProducts = require('./getProducts');
const getProductsCart = require('./getProductsCart');
const addProductCart = require('./addProductCart');
const putProduct = require('./putProduct');
const deleteProduct = require('./deleteProductCart');
const addProduct  =require('./addProduct')

module.exports = {
    getProducts,
    getProductsCart,
    addProduct,
    addProductCart,
    putProduct,
    deleteProduct,
};