
const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    name:{
        type:String,
        require: [true, 'El nombre es requerido']
    },
    lastName:{
        type:String,
        require: [true, 'El apellido es requerido']
    },
    email:{
        type:String,
        require: [true, 'El correo electrónico es requerido']
    },
    password:{
        type:String,
        require: [true, 'La constraseña es requerida']
    }
})

UserSchema.methods.toJSON = function(){
    const { __v, password, _id, ... User } = this.toObject();
    User.uid = _id
    return User;
}

module.exports = model('User', UserSchema);