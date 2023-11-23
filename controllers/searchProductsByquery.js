const Product = require('../models/products')

const searchProductsByTerm = async (req, res) => {
    const { q } = req.query;
  
    try {
      // Realiza la búsqueda por término completo en la base de datos
      const results = await Product.find({ name: { $regex: new RegExp(q, 'i') } });
      res.status(200).json(results);
    } catch (error) {
      console.error('Error al obtener resultados de búsqueda por término:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
  

module.exports = searchProductsByTerm;