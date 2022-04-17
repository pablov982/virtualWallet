const { Schema, model } = require('mongoose')

const vehicleSchema = Schema({
    idPerson:{
        type: String,
        require:[true,'El id de la persona es requerido']
    },
    vehicleType:{
        type: String,
        require:[true,'El tipo de vehiculo es requerido']
    },
    vehiclePlate:{
        type:String,
        require:[true,'La placa del vehiculo es requerida']
    },
    brand:{
        type:String
    },
    line:{
        type:String
    },
    modelVehicle:{
        type:String
    },
    state:{
        type:Boolean,
        default:true
    }
})

vehicleSchema.methods.toJSON = function(){
    const { __v, vehiclePlate, _id, ... Vehicle } = this.toObject();
    Vehicle.uid = _id
    return Vehicle;
}

module.exports = model('Vehicle', vehicleSchema);