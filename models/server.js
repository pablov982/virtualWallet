const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT;

        this.usersPath = '/api/users';
        this.authPath = '/api/auth';
        this.vehiclesPath = '/api/vehicles';

        //conectar con base de datos
        this.connectDB()

        //Middlewares
        this.middlewares()

        //Rutas de la aplicación
        this.routes()

    }

    async connectDB (){
        await dbConnection();
    }

    middlewares() {

        //CORS
        this.app.use(cors())

        //Parseo y lectura del body
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'))

    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usersPath, require('../routes/user'));
        this.app.use(this.vehiclesPath, require('../routes/vehicle'));
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }
}

module.exports = Server