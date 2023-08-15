const express = require('express');
const router = express.Router();

const usuarioController= require('../controllers/usuarioController');

router.get('/', usuarioController.list);
router.get('/registro', usuarioController.mostrarRegistro);//Ruta para mostrar formulario Registro
router.get('/login', usuarioController.mostrarlogin);//Ruta para mostrar Login
router.post('/add', usuarioController.save); //Ruta para agregar un usuario desde registro.ejs

module.exports = router;
