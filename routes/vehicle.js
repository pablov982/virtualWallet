const { Router } = require('express');
const { check } = require('express-validator');

const { 
    vehiclePost,
    vehicleGet,
    vehicleDelete } = require('./../controllers/vehicle');

const { fieldValidator } = require('./../middleware/fieldValidator');

const router = Router()

router.get('/', vehicleGet);

router.post('/', [
    check('idPerson', 'El id de la persona es requerido').not().isEmpty(),
    check('vehicleType', 'El tipo de vehiculo es requerido').not().isEmpty(),
    check('vehiclePlate', 'La placa del vehiculo es requerida').not().isEmpty(),
    fieldValidator
], vehiclePost)

router.delete('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    fieldValidator
], vehicleDelete)

module.exports = router