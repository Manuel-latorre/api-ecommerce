const mongoose = require("mongoose")
const express = require('express')
const cors = require("cors");

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


/* POST *//* POST *//* POST *//* POST *//* POST *//* POST */
app.post('/products-cart', controllers.addProductCart);
app.post('/products', controllers.addProduct);

/* PUT *//* PUT *//* PUT *//* PUT *//* PUT *//* PUT */

app.put('/products-cart/:productId', controllers.putProduct)

/* DELETE *//* DELETE *//*DELETE *//* DELETE *//* DELETE *//* DELETE */

app.delete('/products-cart/:productId', controllers.deleteProduct);









mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to database'))
.catch((error) => console.error(error))

app.listen(port, () => console.log('server listening on port', port))