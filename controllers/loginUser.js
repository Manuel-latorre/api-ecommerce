const User = require('../models/user');
const bcrypt = require('bcryptjs');

const loginUser = async (req, res) => {
    try {
        // Obtener datos del cuerpo de la solicitud
        const { email, password } = req.body;

        // Validar que los campos requeridos estén presentes
        if (!email || !password) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
        }

        // Buscar el usuario en la base de datos
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Credenciales inválidas de ahi.' });
        }

        // Verificar la contraseña
if (!user.password) {
    return res.status(401).json({ error: 'Credenciales inválidas.' });
}
const passwordMatch = await bcrypt.compare(password, user.password);
if (!passwordMatch) {
    return res.status(401).json({ error: 'Credenciales inválidas.' });
}



        res.status(200).json({
            _id: user._id,
            email: user.email,
            fullname: user.fullname,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = loginUser;

