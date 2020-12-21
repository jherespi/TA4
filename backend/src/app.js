const express = require('express');
const cors = require('cors');
const server = express();

//Configuraciones
server.set('port',8080);

//Middlewares
server.use(cors());
server.use(express.json());

//Rutas
server.get('/',function (req,res) {
    res.send("<h1>Hola mundo con Express</h1>");
});

module.exports = server;
