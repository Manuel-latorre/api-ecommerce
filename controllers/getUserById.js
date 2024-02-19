const User = require('../models/user');

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;

        // Buscar el usuario por su ID en la base de datos
        const user = await User.findById(userId);

        // Si no se encontró el usuario, devolver un mensaje indicando que no se encontró
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        const simplifiedUser = {
            fullname: user.fullname,
            email: user.email,
            id: user.id,
            cart: user.cart
        };

        // Devolver el usuario simplificado en la respuesta
        res.status(200).json(simplifiedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = getUserById;
