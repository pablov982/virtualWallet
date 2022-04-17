const { response } = require('express')
const bcrypt = require('bcryptjs')

const User = require('../models/User')

const userGet = async ( req, res = response) => {

} 

const userPost = async (req, res = response ) => {
    
    const { name, lastName, email, password } = req.body
    const user = new User({ name, lastName, email, password });

    //Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt);

    await user.save();

    res.json({
        user
    })

}

module.exports = {
    userPost
}