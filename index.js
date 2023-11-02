const mongoose = require("mongoose")
const express = require('express')
const cors = require("cors");
const mercadopago = require('mercadopago')

require("dotenv").config();

const controllers = require('./controllers')

const app = express()
const port = process.env.PORT || 8080

//middleware
app.use(cors())
app.use(express.json())


/* GET *//* GET *//* GET *//* GET *//* GET *//* GET *//* GET */

app.get('/products', controllers.getProducts);
app.get('/products-cart', controllers.getProductsCart);
app.get('/products/:id', controllers.getProductById);


/* POST *//* POST *//* POST *//* POST *//* POST *//* POST */
app.post('/products-cart', controllers.addProductCart);
app.post('/products', controllers.addProduct);

/* PUT *//* PUT *//* PUT *//* PUT *//* PUT *//* PUT */

app.put('/products-cart/:productId', controllers.putProduct)

/* DELETE *//* DELETE *//*DELETE *//* DELETE *//* DELETE *//* DELETE */

app.delete('/products-cart/:productId', controllers.deleteProduct);



/* MERCADO PAGO */

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
})

app.get("/", function(req, res){
    res.send("backend maercadopago")
})

app.post("/create_preference", (req, res) => {
    let preference = {
        items: [
            {
                title: req.body.description,
                unit_price: Number(req.body.price),
                quantity: Number(req.body.quantity),
            },
        ],
        back_urls: {
            success: "http://localhost:8080",
            failure: "http://localhost:8080",
            pending: "http://localhost:8080",
        },
        auto_return: 'approved',
    };

    mercadopago.preferences
    .create(preference)
    .then((response) => {
        res.json({ id: response.body.id });
    })
    .catch(function (error){
        console.log(error);
    })

    console.log(res);
})





mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to database'))
.catch((error) => console.error(error))

app.listen(port, () => console.log('server listening on port', port))