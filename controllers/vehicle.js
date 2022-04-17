const { response } = require('express');

const Vehicle = require('./../models/Vehicles');

const vehiclePost = async (req, res = response) =>{

    const { idPerson, vehicleType, vechiclePlate, brand, line, modelVehicle } = req.body;
    const vehicle = Vehicle({idPerson, vehicleType, vechiclePlate, brand, line, modelVehicle});

    await vehicle.save();

    res.json({
        vehicle
    })
}

const vehicleGet = async (req, res = response) => {

    const { limit = 10, from = 0, id } = req.query;
    const query = { idPerson: id, state: true }

    const [total, vehicle] = await Promise.all([
        Vehicle.countDocuments(query),
        Vehicle.find(query)
            .skip(Number(from))
            .limit(Number(limit))
    ]);
    
    res.json({
        total,
        vehicle
    })
}

const vehicleDelete = async (req, res = response) => {
    const { id } = req.params

    const vehicle = await Vehicle.findByIdAndUpdate( id, { state: false })

    res.json({
        vehicle
    })

}

module.exports = {
    vehiclePost,
    vehicleGet,
    vehicleDelete
}