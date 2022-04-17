const { response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');

const login = async (req, res = response) => {
    
    const { email, password } = req.body;

    try {
        
        const user = await User.findOne({ email });

        //verificar que exita el email
        if(!user) {
            return res.status(400).json({
                msg: 'El correo electrónico no se encuentra registrado'
            })
        }

        //Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({
                msg: 'usuario / password nos son los correctos, revise la información e intente nuevamente'
            })
        }

        res.json({
            user
        })

    } catch (error) {
        
        console.log(error)
        return res.status(500).json({
            msg: 'Algo salió mal',
        })

    }
}

module.exports= {
    login
}