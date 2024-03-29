const getProducts = require('./getProducts');
const getProductsCart = require('./getProductsCart');
const getProductById = require('./getProductById')
const addProductCart = require('./addProductCart');
const putProduct = require('./putProduct');
const deleteProduct = require('./deleteProductCart');
const addProduct  =require('./addProduct')
const searchProductsByName = require('./searchProductsByName')
const searchProductsByTerm = require('./searchProductsByquery')
const createUser = require('./createUser');
const loginUser = require('./loginUser');
const getAllUsers = require('./getUsers');
const getUserById = require('./getUserById');

module.exports = {
    getProducts,
    getProductsCart,
    getProductById,
    addProduct,
    addProductCart,
    putProduct,
    deleteProduct,
    searchProductsByName,
    searchProductsByTerm,
    createUser,
    loginUser,
    getAllUsers,
    getUserById,
};