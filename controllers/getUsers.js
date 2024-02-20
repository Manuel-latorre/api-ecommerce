const User = require('../models/user');

const getAllUsers = async (req, res) => {
    try {
        // Buscar todos los usuarios en la base de datos
        const users = await User.find();

        // Si no se encontraron usuarios, devolver un mensaje indicando que no hay usuarios
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'Users no found.' });
        }

        const simplifiedUsers = users.map(user => ({
            fullname: user.fullname,
            email: user.email,
            id: user.id,
            cart: user.cart
        }));

        // Devolver los usuarios simplificados en la respuesta
        res.status(200).json(simplifiedUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

module.exports = getAllUsers;
