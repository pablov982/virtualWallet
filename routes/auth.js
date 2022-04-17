const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth')
const { fieldValidator } = require('../middleware/fieldValidator');

const router = Router();

router.post('/login', [
    check('email', 'El campo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    fieldValidator
], login);

module.exports = router;