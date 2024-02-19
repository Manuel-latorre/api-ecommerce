const Cart = require('../models/cart');



const putProduct = async (req, res) => {
    const { productId } = req.params;
    const {query} = req.query;
    const body = req.body;

    const searchProd = await Cart.findById(productId);

    if(!query) {
        res.status(404).json({mensaje: "Enviar una query"});
    } else if (searchProd && query === "add"){
        body.amount = body.amount + 1;

        await Cart.findByIdAndUpdate(productId, body, {
            new: true,
        }).then((product) => {
            res.json({
                mensaje: `El producto: ${product.name} fue actualizado`,
                product,
            });  
        });
    } else if (searchProd && query === "del") {
        body.amount = body.amount - 1;

        await Cart.findByIdAndUpdate(productId, body,  {
            new: true,
        }).then((product) => {
            res.json({
                mensaje: `El producto: ${product.name} fue actualizado`,
                product,
            })
        })
    }else{
        res.status(400).json({mensaje: 'Error'});
    }
}

module.exports = putProduct;