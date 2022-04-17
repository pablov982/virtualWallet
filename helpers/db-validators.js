const user = require('../models/User')

//Se verifica si el correo existe en base de datos
const emailExist = async ( email = '' ) => {
    const existEmail = await user.findOne({ email });
    if( existEmail ){
        throw new Error(`El correo ${email} ya existe en la base de datos`)
    }
}

module.exports = {
    emailExist
}