const express = require('express');
const path = require('path');

//Inicializaciones

const app = express();

//Settings

app.set('port', process.env.PORT || 4000);//colocando el puerto como variable global
app.set('views', path.join(__dirname, 'views'));//vistas


//Middelwares

app.use(express.urlencoded({extended: false})); // pasar datos recibidos a json

//Variables Globales

//Rutas

app.get('/',(req,res)=>{
    res.send('hello world');
});

// Archivos estaticos

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;