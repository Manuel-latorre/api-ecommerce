const Product = require('../models/products');

const searchProductsByName = async (req, res) => {
  const { name } = req.query;

  try {
    const products = await Product.find({ name: { $regex: new RegExp(name, 'i') } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar productos por nombre' });
  }
};

module.exports = searchProductsByName;

