const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const configura= require('./configdb');
const myConnection = require ('express-myconnection');
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
app.use(myConnection(mysql, {
  host:configura.db_host,
  user:configura.db_user,
  password: configura.db_password,
  database: configura.db_database,
  port: configura.db_port,
}, 'single'));


//configuracion en servidor para conectar con metodo POST
app.use(express.urlencoded({extended: false}));

//routes

app.use('/', usuariosRoutes);

//statics file
app.use(express.static(path.join(__dirname, 'public')));

//coneccion servidor
app.listen(configura.port, () => { // metodo listen 
    console.log(`Servidor escuchando en esta ruta http://localhost:${configura.port}`); // muestra en consola el mensae ¨Servidor escuchado ...¨
  });
