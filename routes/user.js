const { Router } = require("express")
const { check } = require("express-validator")

const { userPost } = require('../controllers/users');
const { emailExist } = require("../helpers/db-validators");

const { fieldValidator } = require('../middleware/fieldValidator')

const router = Router()


router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('password', 'La constraseña debe de ser de mas de 6 letras').isLength({ min:6 }),
    check('email', 'El correo no es valido').isEmail(),
    check('email').custom( emailExist ),
    fieldValidator
], userPost)

module.exports = router