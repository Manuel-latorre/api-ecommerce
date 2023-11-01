const Cart  = require('../models/cart');
const Product = require('../models/products');

const addProductCart  = async (req, res) => {
    const {name, imageCard, price} = req.body;

    const ifExist = await Product.findOne({name});

    const ifEmpty = name !== "" && imageCard !== "" && price !== "";

    const ifStayIncart = await Cart.findOne({name});

    if(!ifExist){
        res.status(400).json({
            mensaje: "Este producto no se ecnuentra disponible",
        });
    }else if (ifEmpty && !ifStayIncart){
        const newProdInCart = new Cart({name, imageCard, price, amount: 1});

        await Product.findByIdAndUpdate(
            ifExist?._id,
            {inCart: true, name, imageCard, price},
            {new: true}
        )

        .then((product) => {
            newProdInCart.save();
            res.json({
                mensaje: `El producto fue agregado al carrito`,
                product,
            });
        })
        .catch((error) => console.log(error));
    } else if(ifStayIncart){
        res.status(400).json({
            mensaje: 'El producto ya esta en el carrito'
        });
    }
}

module.exports = addProductCart;