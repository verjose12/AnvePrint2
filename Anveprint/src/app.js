const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const myConnection = require ('express-myconnection');
const port = 3001;
const app = express();

//importing routes
const usuariosRoutes = require('./routes/usuarios');

//settings

app.set('port', process.env.PORT|| 3001);
// Configuración de EJS como motor de plantillas, 
app.set('view engine', 'ejs');
//buscar en automatico las vistas en la carpeta "views":
app.set('views', path.join(__dirname, 'views'));

//middlewares

app.use(morgan('dev'));
app.use(myConnection(mysql,{
  host: 'localhost',
  user: 'verjose',
  password: 'root',
  database: 'db_anve2',
  port: 3306,
}, 'single'));

app.use(express.urlencoded({extended: false}));

//routes

app.use('/', usuariosRoutes);

//statics file
app.use(express.static(path.join(__dirname, 'public')));

//coneccion servidor
app.listen(port, () => { // metodo listen 
    console.log(`Servidor escuchando en esta ruta http://localhost:${port}`); // muestra en consola el mensae ¨Servidor escuchado ...¨
  });
