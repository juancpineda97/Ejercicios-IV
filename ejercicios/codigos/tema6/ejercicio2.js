const express = require('express');
const app = express();
const puerto = process.env.port || 8080;

app.get('/', function(req, res){
    res.send("Aplicación de prueba del Ejercicio 2 del Tema 6 de IV");
});

app.get('/parametro/:param', function(req, res){
    respuesta = "Aplicación de prueba del Ejercicio 2 del Tema 6 de IV, " + 
    "Parámetro facilitado a la aplicación: " + req.params.param;
    res.send(respuesta);
});

app.listen(puerto, function() {
    console.log(puerto);
});

module.exports = app;