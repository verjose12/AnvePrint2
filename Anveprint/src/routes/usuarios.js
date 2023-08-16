const express = require('express');
const router = express.Router();

const usuarioController= require('../controllers/usuarioController');

router.get('/', usuarioController.list);
router.get('/AnvePrint', usuarioController.mostrarAnve);
router.get('/index', usuarioController.mostrarindex);
router.get('/registro', usuarioController.mostrarRegistro);//Ruta para mostrar formulario Registro
router.get('/login', usuarioController.mostrarlogin);//Ruta para mostrar Login
router.get('/admin', usuarioController.mostrarAdmin);//
router.post('/add', usuarioController.save); //Ruta para agregar un usuario desde registro.ejs
router.post('/login', usuarioController.autenticarLogin);//Ruta para iniciar sesion
// Ruta para insertar un producto (POST request)
router.post('/insertar-producto', usuarioController.insertarProducto);


module.exports = router;
