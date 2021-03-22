const express = require('express');
const exphbs =require('express-handlebars');
const path = require('path');
const morgan = require('morgan');

//Inicializaciones

const app = express();

//Settings

app.set('port', process.env.PORT || 4000);//colocando el puerto como variable global
app.set('views', path.join(__dirname, 'views'));//vistas
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}))

app.set('view engine','.hbs');

//Middelwares

app.use(morgan('dev'));

app.use(express.urlencoded({extended: false})); // pasar datos recibidos a json

//Variables Globales

//Rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));


// Archivos estaticos

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;