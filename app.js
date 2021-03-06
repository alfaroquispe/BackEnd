// Requires
var express = require('express');
var mongoose = require('mongoose');

// Inicializar variables
var app = express();

// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
})

// Rutas ( path o rutas, (callback function 3 parametros))
app.get('/', (request, response, next) => {

    response.status(400).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});

// Excuchar peticiones
app.listen(3030, () => {
    console.log('Express server puerto 3030: \x1b[32m%s\x1b[0m', 'online');
});