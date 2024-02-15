const User = require('../models/user');

const getAllUsers = async (req, res) => {
    try {
        // Buscar todos los usuarios en la base de datos
        const users = await User.find();

        // Si no se encontraron usuarios, devolver un mensaje indicando que no hay usuarios
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No se encontraron usuarios.' });
        }

        // Si se encontraron usuarios, devolverlos en la respuesta
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = getAllUsers;
