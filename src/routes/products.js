const express = require("express")
const productsSchema = require('../models/products');

const router = express.Router();

router.post('/products', (req, res) => {
    const product = productsSchema(req.body);
    product.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
})

module.exports = router;