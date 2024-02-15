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

        // Si se encontró el usuario, devolverlo en la respuesta
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = getUserById;
